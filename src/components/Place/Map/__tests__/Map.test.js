import Map from '../';

it('mount without crashing', () => {
  const wrapped = mount(<Map zipCode="05586030" />);
  wrapped.unmount();
});
