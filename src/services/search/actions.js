import { FETCH_CEP } from './actionTypes';
import axios from 'axios';

import { CEP_API } from '../util';

export const fetchCEP = (cep, callback) => dispatch => {
  return axios
    .get(CEP_API(cep))
    .then(res => {
      if (!!callback) {
        callback();
      }

      if (!!res.data.erro) {
        alert('CEP inválido!');
        return dispatch({
          type: FETCH_CEP,
          payload: {
            error: res.data.erro
          }
        });
      }

      const { logradouro, bairro, localidade, uf, cep } = res.data;
      const result = {
        street: logradouro,
        neighborhood: bairro,
        city: `${localidade} - ${uf}`,
        zipCode: cep
      };

      return dispatch({
        type: FETCH_CEP,
        payload: result
      });
    })
    .catch(error => {
      console.log('Could not fetch the Viacep api. Try again later.');
      alert(error);
      return dispatch({
        type: FETCH_CEP,
        payload: {
          error
        }
      });
    });
};
