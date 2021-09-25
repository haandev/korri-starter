const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

const isStartsCapital = (str) =>
  str && str.charAt(0) === str.charAt(0).toUpperCase();

const getCommentLines = (str) => {
  let returnValue =
    str.match(/\/\*\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/)?.[0] ||
    "/** */";
  returnValue = returnValue
    .replace(/(\/\*\*)|(\*\/)|(\n)/g, "")
    .split("*")
    .map((val) => val.trim())
    .filter((e) => !!e);
  return returnValue;
};

module.exports = {
  toKebabCase,
  isStartsCapital,
  getCommentLines,
};
