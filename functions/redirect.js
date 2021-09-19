exports.handler = async event => {
  if (event.queryStringParameters.fbclid || (event.headers.referer && event.headers.referer.indexOf('facebook') > -1)) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://adfave.org/' + event.path.split('/')[4]
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + '/' + event.path.split('/')[4]
      }
    }
  }
}
