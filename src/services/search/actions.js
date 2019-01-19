import { FETCH_CEP } from './actionTypes';
import axios from 'axios';

import { CEP_API } from '../util';

export const fetchCEP = cep => dispatch => {
  return axios
    .get(CEP_API(cep))
    .then(res => {
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
    .catch(err => {
      console.log('Could not fetch the Viacep api. Try again later.');
    });
};
