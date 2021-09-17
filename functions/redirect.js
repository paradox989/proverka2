exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://wopos.ru/' + event.path.split('/')[4]
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + '/post/' + event.path.split('/')[4]
      }
    }
  }
}
