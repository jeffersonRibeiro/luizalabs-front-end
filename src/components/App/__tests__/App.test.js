import Root from '../../../Root';
import App from '../';
import Search from '../../../scenes/Search';
import Favorites from '../../../scenes/Favorites';
import Place from '../../Place';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('mount without crashing', () => {
  wrapped = mount(
    <MemoryRouter>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  );
});

it('should render the search scene when url /search', () => {
  wrapped = mount(
    <MemoryRouter initialEntries={['/search']}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  );

  expect(wrapped.find(Search).length).toBe(1);
});

it('should render the favorites page and show 2 places added in favorite', () => {
  const initialState = {
    favorite: {
      places: [
        {
          street: 'Rua Abadia dos Dourados',
          neighborhood: 'Vila Indiana',
          city: 'São Paulo - SP',
          zipCode: '05586-030'
        },
        {
          street: 'Rua Treze de Junho',
          neighborhood: 'Bonança',
          city: 'Osasco - SP',
          zipCode: '06266-414'
        }
      ]
    }
  };

  wrapped = mount(
    <MemoryRouter initialEntries={['/favorites']}>
      <Root initialState={initialState}>
        <App />
      </Root>
    </MemoryRouter>
  );

  expect(wrapped.find(Favorites).length).toBe(1);

  expect(wrapped.find(Place).length).toBe(2);
});
