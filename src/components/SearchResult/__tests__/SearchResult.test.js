import Root from '../../../Root';
import SearchResult from '../';
import Place from '../../Place';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('render without crashing', () => {
  wrapped = mount(
    <Root>
      <SearchResult />
    </Root>
  );
});

it('should contain a place', () => {
  const initialState = {
    search: {
      result: {
        city: 'São Paulo - SP',
        neighborhood: 'Vila Indiana',
        street: 'Rua Abadia dos Dourados',
        zipCode: '05586-030'
      }
    }
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <SearchResult />
    </Root>
  );

  expect(wrapped.find(Place).length).toBe(1);
});
