import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
//router
import { BrowserRouter } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store/store';
import AuthInitializer from '@/common/auth/AuthInitializer';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthInitializer />
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
)
