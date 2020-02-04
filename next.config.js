const withSass = require('@zeit/next-sass')

module.exports = {
  exportTrailingSlash: true,
  ...withSass(),
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}
