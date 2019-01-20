import Root from '../../../Root';
import NavigationItems from '../';

it('mount without crashing', () => {
  const initialState = {
    favorite: {
      places: []
    }
  };
  const wrapped = mount(
    <MemoryRouter>
      <Root initialState={initialState}>
        <NavigationItems />
      </Root>
    </MemoryRouter>
  );

  wrapped.unmount();
});
