import Root from '../../../Root';
import FavoritePlaces from '../';
import Place from '../../Place';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('mount without crashing', () => {
  wrapped = mount(
    <Root>
      <FavoritePlaces />
    </Root>
  );
});

it('should shows an empty text if favorite places is empty', () => {
  const initialState = {
    favorite: {
      places: []
    }
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <FavoritePlaces />
    </Root>
  );

  expect(wrapped.contains(<div>Empty</div>)).toBe(true);
});

it('should render 2 places', () => {
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
    <Root initialState={initialState}>
      <FavoritePlaces />
    </Root>
  );

  expect(wrapped.find(Place).length).toBe(2);
});
