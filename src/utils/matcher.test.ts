import matcher from "./matcher";

const url =
  "https://medium.com/c-sharp-progarmming/create-your-own-web-scraper-in-c-in-just-a-few-minutes-c42649adda8";

describe("matcher matches valid pattern", () => {
  const valid = [
    "*://medium.com/*",
    "http*://medium.com/*",
    "https://medium.com/c-sharp-progarmming/create-your-own-web-scraper-in-c-in-just-a-few-minutes-c42649adda8",
    "*",
    "**",
  ];

  test.each(valid)("%s", (pattern) => {
    expect(matcher(pattern, url)).toBe(true);
  });
});

describe("matcher doesn't match invalid pattern", () => {
  const invalid = ["*://medium.com", "http://*", ""];

  test.each(invalid)("%s", (pattern) => {
    expect(matcher(pattern, url)).toBe(false);
  });
});
