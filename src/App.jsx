import { useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import MainRoute from '@/routes/MainRoute';

import '@/css/reset.css';
import '@/css/layout.css';
import '@/css/component.css';

function App() {
  const auth = useSelector(state => state.auth);
  const menu = useSelector(state => state.menu);
  console.log("auth: ",auth);
  console.log("menu: ",menu);
  console.log("persist:root:", localStorage.getItem("persist:root"));

  return (<Fragment>
    <MainRoute/>
  </Fragment>)
}

export default App
