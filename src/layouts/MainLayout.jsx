import { Outlet } from 'react-router-dom';

import Header from '@/layouts/Header';
import Menu from '@/layouts/Menu';
import Footer from '@/layouts/Footer';

function MainLayout() {
  return (
    <div className="root-layout">
      <Header />

      <Menu />
      
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;