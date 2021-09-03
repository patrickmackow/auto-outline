import matcher from "./matcher";

const url =
  "https://medium.com/c-sharp-progarmming/create-your-own-web-scraper-in-c-in-just-a-few-minutes-c42649adda8";

test("matcher matches valid pattern", () => {
  const valid = "*://medium.com/*";

  expect(matcher(valid, url)).toBe(true);
});

test("matcher doesn't match invalid pattern", () => {
  const invalid = "*://medium.com";

  expect(matcher(invalid, url)).toBe(false);
});
