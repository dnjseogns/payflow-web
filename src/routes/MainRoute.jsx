import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginPage from "@/pages/login/LoginPage";
import ErrorPage from '@/pages/error/ErrorPage';
import MainLayout from '@/layouts/MainLayout';

import DevPage from '@/pages/dev/DevPage';
import DashBoardPage from '@/pages/dash/DashBoardPage';
import UserPage from '@/pages/user/UserPage';
import '@/css/layout.css';
import '@/css/component.css';

function MainRoute() {
  const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/dash" /> : <LoginPage />}
      />

      {/* 메인 페이지 */}
      <Route 
        element={isLogin ? <MainLayout /> : <Navigate to="/login" replace />}
      >
        <Route path="/dash" element={<DevPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>

      {/* 기본 리다이렉트 */}
      <Route
        path="/"
        element={<Navigate to={isLogin ? "/dash" : "/login"} />}
      />

      {/* 404 */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default MainRoute;