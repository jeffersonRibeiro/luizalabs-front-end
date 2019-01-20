import Root from '../../../Root';
import App from '../';
import Search from '../../../scenes/Search';
import Favorites from '../../../scenes/Favorites';

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

it('should render the favorites scene when url /favorites', () => {
  wrapped = mount(
    <MemoryRouter initialEntries={['/favorites']}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  );

  console.log(wrapped.debug());

  expect(wrapped.find(Favorites).length).toBe(1);
});
