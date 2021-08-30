import * as browser from "webextension-polyfill";

var urls = [];

browser.storage.local.get().then((data) => (urls = data.urls ?? []));

browser.storage.onChanged.addListener((changes) => updateUrls(changes));

function updateUrls(changes: Record<string, browser.Storage.StorageChange>) {
  urls = changes.url?.newValue ?? [];
  console.log(urls);
}
