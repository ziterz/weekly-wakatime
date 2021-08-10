exports.success = (res, { code = 200, message = 'success', data = {} }) => {
  const resData = {
    'statusCode': code,
    'message': message,
    'data': data
  };

  res.status(code)
  res.json(resData);
  res.end();
}

exports.failed = (res, { code = 500, message = 'Error' }) => {
  const resData = {
    'statusCode': code,
    'message': message,
  };

  res.status(code)
  res.json(resData);
  res.end();
}