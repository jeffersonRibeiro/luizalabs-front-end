import NavigationItem from '../';

it('mount without crashing', () => {
  const wrapped = mount(
    <MemoryRouter>
      <NavigationItem path="/search" />
    </MemoryRouter>
  );
  wrapped.unmount();
});
