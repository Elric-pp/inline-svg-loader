var REGEX = /<svg src=.*?(require\(.*?\)).*?>/g;

module.exports = function(content) {
  this.cacheable && this.cacheable();
  return content.replace(REGEX, function(m, p) {
    return `"+${p}+"`
  });
}
