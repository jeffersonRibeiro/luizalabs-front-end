import Root from '../../../Root';
import App from '../';

it('mount without crashing', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.unmount();
});
