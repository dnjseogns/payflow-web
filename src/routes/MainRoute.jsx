import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginPage from '@/pages/login/LoginPage';
import ErrorPage from '@/pages/common/error/ErrorPage';
import MainLayout from '@/layouts/MainLayout';
import DashboardPage from '@/pages/dash/DashboardPage';

import ProtectedRoute from '@/routes/ProtectedRoute';
import { RouteComponentMap } from '@/routes/RouteComponentMap';

import '@/css/layout.css';
import '@/css/component.css';

function MainRoute() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const menuList = useSelector(state => state.menu.menuList);

  // console.log("isLogin",isLogin);

  const renderMenuRoutes = (menus) => {

    let routes = [];

    menus.forEach(menu => {

      // 현재 메뉴 route 생성
      if (menu.menuUrl) {

        routes.push(
          <Route
            key={menu.menuId}
            path={menu.menuUrl}
            element={
              RouteComponentMap[menu.menuUrl]
              || RouteComponentMap.default
            }
          />
        );
      }

      // children 재귀
      if (menu.children?.length > 0) {

        routes = [
          ...routes,
          ...renderMenuRoutes(menu.children)
        ];
      }

    });

    return routes;
  };

  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      {/* 대시보드 페이지 */}
      <Route
        path="/dashboard"
        element={isLogin ? <MainLayout /> : <Navigate to="/login" replace />}
      >
        <Route index element={<DashboardPage />} />
      </Route>

      {/* 메인 페이지 */}
      <Route 
        element={isLogin ? <MainLayout /> : <Navigate to="/login" replace />}
      >
        {renderMenuRoutes(menuList)}
      </Route>
      {/* 기본 리다이렉트 */}
      <Route
        path="/"
        element={<Navigate to={isLogin ? "/dashboard" : "/login"} />}
      />

      {/* 404 */}
      <Route path="*" element={isLogin ? <ErrorPage /> : <Navigate to="/login" replace />} />
    </Routes>
  );
}

export default MainRoute;