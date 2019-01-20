it('TODO', () => {});
// it('should fetch cep when form submitted', () => {
//   moxios.install();
//   moxios.stubRequest(CEP_API('05586-030'), {
//     status: 200,
//     response: {
//       city: 'São Paulo - SP',
//       neighborhood: 'Vila Indiana',
//       street: 'Rua Abadia dos Dourados',
//       zipCode: '05586-030'
//     }
//   });

//   const wrapped = mount(
//     <Root>
//       <SearchForm />
//     </Root>
//   );

//   expect(wrapped.find(SearchForm).state().isLoading).toBe(false);

//   wrapped.find('.search-button').simulate('click');

//   expect(wrapped.find(SearchForm).isLoading).toBe(true);

//   moxios.wait(() => {
//     wrapped.update();
//     expect(wrapped.find(SearchForm).isLoading).toBe(false);

//     done
//   });

//   wrapped.unmount();
// });
