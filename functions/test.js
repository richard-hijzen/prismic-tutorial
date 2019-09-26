exports.handler = (event, context, callback) => {
  if (event.queryStringParameters && event.queryStringParameters.name) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Hi, ${event.queryStringParameters.name}!`
        },
        null,
        2
      )
    };
  }