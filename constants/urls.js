if(process.env.NODE_ENV === 'production') {
    urls = {
      DOMAIN_URL: 'http://vizyul.com/',
      API_URL: 'http://vizyul.com/api/v1',
      FILE_URL: 'http://vizul.com/api/v1/file/'
    }
  } else {
    urls = {
      DOMAIN_URL: 'http://localhost:8008/',
      API_URL: 'http://localhost:3000/api/v1/',
      FILE_URL: 'http://localhost:3000/api/v1/file/'
    }
  }

module.exports = urls