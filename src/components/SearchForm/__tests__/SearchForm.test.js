import Root from '../../../Root';
import SearchForm from '../';

it('mount without crashing', () => {
  const wrapped = mount(
    <Root>
      <SearchForm />
    </Root>
  );
  wrapped.unmount();
});
