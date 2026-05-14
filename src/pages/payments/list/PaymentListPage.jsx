import { useEffect, useState } from 'react';
import { paymentListApi } from '@/pages/payments/list/paymentListApi.js';
import PaymentListPageView from '@/pages/payments/list/PaymentListPageView.jsx';
import { useSelector } from 'react-redux';

function PaymentListPage() {
  const payMethodOptions = useSelector(
    state => state.code.codeList['PAY_METHOD'] || []
  );
  const payStatusOptions = useSelector(
    state => state.code.codeList['PAY_STATUS'] || []
  );
  const payMethodSelectOptions = [
    { label: '전체', value: '' },

    ...payMethodOptions.map(item => ({
      label: item.codeName,
      value: item.code
    }))
  ];
  const payStatusSelectOptions = [
    { label: '전체', value: '' },

    ...payStatusOptions.map(item => ({
      label: item.codeName,
      value: item.code
    }))
  ];


  // search params
  const [merchantId, setMerchantId] = useState();
  const [payMethod, setPayMethod] = useState();
  const [payStatus, setPayStatus] = useState();

  const formatDate = (d) => d.toISOString().slice(0, 10);
  const [baseDateFrom, setBaseDateFrom] = useState('2026-01-01');
  const [baseDateTo, setBaseDateTo] = useState(formatDate(new Date()));

  // result
  const [paymentList, setPaymentList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // paging
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const columns = [
    { field: 'merchantId', headerName: '가맹점ID' },
    { field: 'baseDate', headerName: '기준일' },
    { field: 'txSeq', headerName: '거래순번' },
    { field: 'merchantOrderId', headerName: '주문번호' },
    { field: 'payMethodName', headerName: '결제수단' },
    { field: 'amount', headerName: '금액' },
    { field: 'payStatusName', headerName: '상태' },
    { field: 'createdAt', headerName: '생성일' }
  ];

  useEffect(() => {
    handleSelect();
  }, [currentPage]);

  const handleSelect = async () => {
    try {

      const reqParams = {
        page: currentPage,
        size: pageSize,

        ...(merchantId ? { merchantId } : {}),
        ...(payMethod ? { payMethod } : {}),
        ...(payStatus ? { payStatus } : {}),

        ...(baseDateFrom ? {baseDateFrom: baseDateFrom.replaceAll('-', '')} : {}),
        ...(baseDateTo ? {baseDateTo: baseDateTo.replaceAll('-', '')} : {})
      };

      console.log("reqParams",reqParams);

      const { code, message, data } =
        await paymentListApi.reqGetPaymentList(reqParams);

      if (code !== '0000') {
        throw new Error(message);
      }

      setPaymentList(data.list);
      setTotalCount(data.totalCount);

    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = () => alert('개발 진행 중');
  const handleUpdate = () => alert('개발 진행 중');
  const handleDelete = () => alert('개발 진행 중');
  const handleExcel = () => alert('개발 진행 중');

  const onPageChange = (changedPage) => {
    setCurrentPage(changedPage);
  };

  return (
    <PaymentListPageView
      merchantId={merchantId}
      setMerchantId={setMerchantId}

      payMethod={payMethod}
      setPayMethod={setPayMethod}

      payStatus={payStatus}
      setPayStatus={setPayStatus}

      baseDateFrom={baseDateFrom}
      setBaseDateFrom={setBaseDateFrom}

      baseDateTo={baseDateTo}
      setBaseDateTo={setBaseDateTo}

      payMethodSelectOptions={payMethodSelectOptions}
      payStatusSelectOptions={payStatusSelectOptions}

      paymentList={paymentList}
      totalCount={totalCount}

      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}

      onSelect={handleSelect}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onExcel={handleExcel}
      onPageChange={onPageChange}
    />
  );
}

export default PaymentListPage;