function matcher(pattern: string, url: string) {
  let patternIndex = 0;
  let urlIndex = 0;
  let patternRevert = null;
  let urlRevert = null;

  while (urlIndex <= url.length - 1) {
    const patternChar = pattern[patternIndex];
    const urlChar = url[urlIndex];

    // * in pattern
    if (patternChar === "*") {
      patternRevert = ++patternIndex;
      urlRevert = urlIndex;
      if (patternIndex > pattern.length - 1) {
        return true;
      }
      continue;
    }
    // mismatch
    if (patternChar !== urlChar) {
      if (patternRevert === null) {
        return false;
      }
      if (urlRevert === null) {
        throw new Error("Shouldn't be here");
      }
      urlIndex = ++urlRevert;
      patternIndex = patternRevert;
      continue;
    }
    patternIndex++;
    urlIndex++;
  }

  // advance pattern
  while (pattern[patternIndex] === "*") {
    patternIndex++;
  }

  return patternIndex > pattern.length - 1;
}

export default matcher;
