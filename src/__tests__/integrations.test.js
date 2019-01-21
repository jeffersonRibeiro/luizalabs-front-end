import axios from 'axios';
import moxios from 'moxios';
import MaskedInput from 'react-text-mask';
import { Provider } from 'react-redux';

import Root from '../Root';
import App from '../components/App';
import Place from '../components/Place';

import { CEP_API } from '../services/util';
const cepMock = '05586-030';
const searchResultMock = {
  cep: '05586-030',
  logradouro: 'Rua Abadia dos Dourados',
  complemento: '',
  bairro: 'Vila Indiana',
  localidade: 'São Paulo',
  uf: 'SP',
  unidade: '',
  ibge: '3550308',
  gia: '1004'
};

beforeEach(() => {
  moxios.install(axios);
});

afterEach(() => {
  moxios.uninstall();
});

it('should 1 place to favorite list and remove', done => {
  moxios.stubRequest(CEP_API(cepMock), {
    status: 200,
    response: searchResultMock
  });

  const wrapped = mount(
    <MemoryRouter initialEntries={['/search']}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  );

  /* Should start with 0 places found */
  expect(wrapped.find(Place).length).toBe(0);

  /* Type the CEP on the input element */
  wrapped.find(MaskedInput).simulate('change', { target: { value: cepMock } });

  /* Click on the submit button */
  wrapped.find('.search-button').simulate('submit');

  moxios.wait(() => {
    wrapped.update();

    /* Should find 1 place */
    expect(wrapped.find(Place).length).toBe(1);

    /* Should have 0 place added to favorite */
    expect(
      wrapped
        .find(Provider)
        .props()
        .store.getState().favorite.places.length
    ).toBe(0);

    /* Add place to favorite */
    wrapped
      .find(Place)
      .find('.place-favorite-button')
      .simulate('click');

    /* Should have 1 place added to favorite */
    expect(
      wrapped
        .find(Provider)
        .props()
        .store.getState().favorite.places.length
    ).toBe(1);

    /* Remove place from favorite */
    wrapped
      .find(Place)
      .find('.place-favorite-button')
      .simulate('click');

    /* Now should have 0 places in favorite again */
    expect(
      wrapped
        .find(Provider)
        .props()
        .store.getState().favorite.places.length
    ).toBe(0);

    wrapped.unmount();
    done();
  });
});
