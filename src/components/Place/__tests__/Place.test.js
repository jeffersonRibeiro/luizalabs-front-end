import Root from '../../../Root';
import Place from '../';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('mount without crashing', () => {
  wrapped = mount(
    <Root>
      <Place />
    </Root>
  );
});

it('should hide map when noMap prop is provided and show again when map icon is clicked', () => {
  const placeMock = {
    city: 'São Paulo - SP',
    neighborhood: 'Vila Indiana',
    street: 'Rua Abadia dos Dourados',
    zipCode: '05586-030'
  };

  wrapped = mount(
    <Root>
      <Place place={placeMock} noMap />
    </Root>
  );

  expect(wrapped.find('.google-map').length).toBe(0);

  wrapped.find('.show-map-button').simulate('click');

  expect(wrapped.find('.google-map').length).toBe(1);
});
