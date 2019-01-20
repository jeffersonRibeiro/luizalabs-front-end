import Spinner from '../';

it('mount without crashing', () => {
  const wrapped = mount(<Spinner />);
  wrapped.unmount();
});
