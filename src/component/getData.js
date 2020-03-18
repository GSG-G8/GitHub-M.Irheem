import accessToken from '../token';

const checkResponse = response => {
  if (response.status !== 200) {
    const error = new Error({ err: 'react error' });
    error.statusCode = 401;
    throw error;
  }
  return response.json();
};

const getData = data =>
  fetch(`${data}?access_token=${accessToken}`)
    .then(checkResponse)
    .catch(err => {
      console.log(err);
    });

export default getData;
