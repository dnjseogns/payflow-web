import DashBoardPage from '@/pages/dash/DashBoardPage';

// // PAYMENT
// import PaymentListPage from '@/pages/payments/list/PaymentListPage';
// import PaymentFailPage from '@/pages/payments/fail/PaymentFailPage';
// import PaymentCancelPage from '@/pages/payments/cancel/PaymentCancelPage';
// import PaymentRefundPage from '@/pages/payments/refund/PaymentRefundPage';

// // STATISTICS
// import PaymentStatisticsPage from '@/pages/statistics/payments/PaymentStatisticsPage';
// import DailyStatisticsPage from '@/pages/statistics/daily/DailyStatisticsPage';
// import MonthlyStatisticsPage from '@/pages/statistics/monthly/MonthlyStatisticsPage';

// // SETTLEMENT
// import DailySettlementPage from '@/pages/settlements/daily/DailySettlementPage';
// import MonthlySettlementPage from '@/pages/settlements/monthly/MonthlySettlementPage';

// // RECONCILIATION
// import ReconciliationPaymentPage from '@/pages/reconciliation/payments/ReconciliationPaymentPage';
// import UnsettledPage from '@/pages/reconciliation/unsettled/UnsettledPage';
// import MismatchPage from '@/pages/reconciliation/mismatch/MismatchPage';

// // OPERATION
// import MerchantPage from '@/pages/merchants/MerchantPage';
// import UserPage from '@/pages/user/UserPage';
// import RolePage from '@/pages/role/RolePage';
// import MenuPage from '@/pages/menu/MenuPage';
// import RoleMenuPage from '@/pages/roleMenu/RoleMenuPage';
// import NoticePage from '@/pages/notices/NoticePage';
// import InquiryPage from '@/pages/inquiries/InquiryPage';

// // SYSTEM
// import BatchPage from '@/pages/batches/BatchPage';
// import CodePage from '@/pages/codes/CodePage';
// import AccessLogPage from '@/pages/logs/access/AccessLogPage';
// import ApiLogPage from '@/pages/logs/api/ApiLogPage';
// import ErrorLogPage from '@/pages/logs/error/ErrorLogPage';

// DEFAULT
import DevPage from '@/pages/dev/DevPage';

export const RouteComponentMap = {
  '/dashboard': <DashBoardPage />,

  // '/payments/list': <PaymentListPage />,
  // '/payments/fail': <PaymentFailPage />,
  // '/payments/cancel': <PaymentCancelPage />,
  // '/payments/refund': <PaymentRefundPage />,

  // '/statistics/payments': <PaymentStatisticsPage />,
  // '/statistics/daily': <DailyStatisticsPage />,
  // '/statistics/monthly': <MonthlyStatisticsPage />,

  // '/settlements/daily': <DailySettlementPage />,
  // '/settlements/monthly': <MonthlySettlementPage />,

  // '/reconciliation/payments': <ReconciliationPaymentPage />,
  // '/reconciliation/unsettled': <UnsettledPage />,
  // '/reconciliation/mismatch': <MismatchPage />,

  // '/merchants': <MerchantPage />,
  // '/users': <UserPage />,
  // '/roles': <RolePage />,
  // '/menus': <MenuPage />,
  // '/role-menus': <RoleMenuPage />,
  // '/notices': <NoticePage />,
  // '/inquiries': <InquiryPage />,

  // '/batches': <BatchPage />,
  // '/codes': <CodePage />,
  // '/logs/access': <AccessLogPage />,
  // '/logs/api': <ApiLogPage />,
  // '/logs/error': <ErrorLogPage />,

  'default': <DevPage />
};