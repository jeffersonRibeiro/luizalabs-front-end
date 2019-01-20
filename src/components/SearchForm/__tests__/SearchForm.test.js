import Root from '../../../Root';
import SearchForm from '../';

import { CEP_API } from '../../../services/util';

it('mount without crashing', () => {
  const wrapped = mount(
    <Root>
      <SearchForm />
    </Root>
  );
  wrapped.unmount();
});
