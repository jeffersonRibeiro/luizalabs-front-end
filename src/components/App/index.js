import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import getRoutes from '../../routes';

const App = () => <BrowserRouter>{getRoutes()}</BrowserRouter>;

export default App;
