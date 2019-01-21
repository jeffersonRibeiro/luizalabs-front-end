export const CEP_API = cep => `https://viacep.com.br/ws/${cep}/json`;

export const isObjectEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

/* Should change in the _colors.scss too */
export const theme = {
  primaryColor: '#7e40af',
  secondaryColor: '#48dbfb',
  heartActiveColor: '#fc5c65'
};
