import * as browser from "webextension-polyfill";
import matcher from "./utils/matcher";

var patterns = [] as string[];

function redirectMatchUrls(
  details: browser.WebRequest.OnBeforeRequestDetailsType
): browser.WebRequest.BlockingResponse | void {
  const { url } = details;

  if (!url.startsWith("https://outline.com") && matchesAny(patterns, url)) {
    return { redirectUrl: `https://outline.com/${url}` };
  }
}

function matchesAny(patterns: string[], url: string) {
  return patterns.some((pattern) => matcher(pattern, url));
}

(function init() {
  browser.storage.local.get().then((data) => {
    patterns = data.patterns;
  });

  browser.storage.onChanged.addListener((changes) => {
    patterns = changes.patterns.newValue || [];
  });

  browser.webRequest.onBeforeRequest.addListener(
    redirectMatchUrls,
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
})();
