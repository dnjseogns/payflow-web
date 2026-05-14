// import DashboardPage from '@/pages/dash/DashboardPage';

// // PAYMENT
import PaymentsListPage from '@/pages/payments/list/PaymentListPage';
// import PaymentsFailPage from '@/pages/payments/fail/PaymentFailPage';
// import PaymentsCancelPage from '@/pages/payments/cancel/PaymentCancelPage';
// import PaymentsRefundPage from '@/pages/payments/refund/PaymentRefundPage';

// // STATISTIC
// import StatisticRetryPage from '@/pages/statistic/retry/StatisticRetryPage';
// import StatisticListPage from '@/pages/statistic/list/StatisticListPage';

// // SETTLEMENT
// import SettlementRetryPage from '@/pages/settlement/retry/SettlementRetryPage';
// import SettlementListPage from '@/pages/settlement/list/SettlementListPage';
// import SettlementAggregatePage from '@/pages/settlement/aggregate/SettlementAggregatePage';

// // RECONCILIATION
// import ReconciliationPaymentPage from '@/pages/reconciliation/payment/ReconciliationPaymentPage';
// import ReconciliationUnsettledPage from '@/pages/reconciliation/unsettled/ReconciliationUnsettledPage';
// import ReconciliationMismatchPage from '@/pages/reconciliation/mismatch/ReconciliationMismatchPage';

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
  // '/dashboard': <DashboardPage />,

  // // PAYMENT
  '/payment/list': <PaymentsListPage />,
  // '/payment/fail': <PaymentsFailPage />,
  // '/payment/cancel': <PaymentsCancelPage />,
  // '/payment/refund': <PaymentsRefundPage />,

  // // STATISTIC
  // '/statistic/retry': <StatisticRetryPage />,
  // '/statistic/list': <StatisticListPage />,

  // // SETTLEMENT
  // '/settlement/retry': <SettlementRetryPage />,
  // '/settlement/list': <SettlementListPage />,
  // '/settlement/aggregate': <SettlementAggregatePage />,

  // // RECONCILIATION
  // '/reconciliation/payment': <ReconciliationPaymentPage />,
  // '/reconciliation/unsettled': <ReconciliationUnsettledPage />,
  // '/reconciliation/mismatch': <ReconciliationMismatchPage />,

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