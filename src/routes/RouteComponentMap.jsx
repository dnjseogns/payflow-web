import DashboardPage from '@/pages/dash/DashboardPage';

// // PAYMENT
import PaymentsListPage from '@/pages/payments/list/PaymentListPage';
import PaymentsFailPage from '@/pages/payments/fail/PaymentFailPage';
import PaymentsCancelPage from '@/pages/payments/cancel/PaymentCancelPage';
import PaymentsRefundPage from '@/pages/payments/refund/PaymentRefundPage';

// // STATISTICS
import StatisticsRetryPage from '@/pages/statistics/retry/StatisticsRetryPage';
import StatisticsListPage from '@/pages/statistics/list/StatisticsListPage';

// 카드정산
import CardListPage from '@/pages/card/list/CardListPage';
// import CardAggregatePage from '@/pages/card/aggregate/CardAggregatePage';
import CardReconciliationPage from '@/pages/card/reconciliation/CardReconciliationPage';
// import CardUnsettledPage from '@/pages/card/unsettled/CardUnsettledPage';

// 휴대폰정산
// import CardListPage from '@/pages/card/list/CardListPage';
// import CardListPage from '@/pages/card/aggregate/CardAggregatePage';
// import CardListPage from '@/pages/card/reconciliation/CardReconciliationPage';
// import CardListPage from '@/pages/card/unsettled/CardUnsettledPage';

// PAY정산
// import CardListPage from '@/pages/card/list/CardListPage';
// import CardListPage from '@/pages/card/aggregate/CardAggregatePage';
// import CardListPage from '@/pages/card/reconciliation/CardReconciliationPage';
// import CardListPage from '@/pages/card/unsettled/CardUnsettledPage';


// // OPERATION
// import MerchantPage from '@/pages/operation/merchant/MerchantPage';
import UserPage from '@/pages/operation/user/UserPage';
// import RolePage from '@/pages/operation/role/RolePage';
// import MenuPage from '@/pages/operation/menu/MenuPage';
// import RoleMenuPage from '@/pages/operation/role-menu/RoleMenuPage';
// import NoticePage from '@/pages/operation/notice/NoticePage';
// import InquiryPage from '@/pages/operation/inquiry/InquiryPage';

// // SYSTEM
// import BatchPage from '@/pages/system/batch/BatchPage';
// import CodePage from '@/pages/system/code/CodePage';
// import AccessLogPage from '@/pages/system/access-log/AccessLogPage';
// import ApiLogPage from '@/pages/system/api-log/ApiLogPage';
// import ErrorLogPage from '@/pages/system/error-log/ErrorLogPage';

// DEFAULT
import DevPage from '@/pages/common/dev/DevPage';

export const RouteComponentMap = {
  '/dashboard': <DashboardPage />,

  // // PAYMENT
  '/payment/list': <PaymentsListPage />,
  '/payment/fail': <PaymentsFailPage />,
  '/payment/cancel': <PaymentsCancelPage />,
  '/payment/refund': <PaymentsRefundPage />,

  // // STATISTICS
  '/statistics/retry': <StatisticsRetryPage />,
  '/statistics/list': <StatisticsListPage />,

  // 카드정산
  '/card-settlement/list': <CardListPage />,
  // '/card-settlement/aggregate': <CardAggregatePage />,
  '/card-settlement/reconciliation': <CardReconciliationPage />,
  // '/card-settlement/unsettled': <CardUnsettledPage />,

  //휴대폰정산

  //pay정산

  // // OPERATION
  // '/operation/merchant': <MerchantPage />,
  '/operation/user': <UserPage />,
  // '/operation/role': <RolePage />,
  // '/operation/menu': <MenuPage />,
  // '/operation/role-menu': <RoleMenuPage />,
  // '/operation/notice': <NoticePage />,
  // '/operation/inquiry': <InquiryPage />,

  // // SYSTEM
  // '/system/batch': <BatchPage />,
  // '/system/code': <CodePage />,
  // '/system/access-log': <AccessLogPage />,
  // '/system/api-log': <ApiLogPage />,
  // '/system/error-log': <ErrorLogPage />,

  'default': <DevPage />
};