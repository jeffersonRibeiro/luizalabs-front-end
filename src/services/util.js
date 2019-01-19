export const CEP_API = cep => `https://viacep.com.br/ws/${cep}/json`;
export const isObjectEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
