import { useEffect, useState } from 'react';

import { paymentFailApi } from '@/pages/payments/fail/paymentFailApi';
import PaymentFailPageView from '@/pages/payments/fail/PaymentFailPageView';
import { merchantApi } from '@/pages/merchant/merchantApi.js';

function PaymentFailPage() {

  const [merchantSelectOptions, setMerchantSelectOptions] = useState([]);
  const [merchantId, setMerchantId] = useState();

  const formatDate = (d) => d.toISOString().slice(0, 10);

  const [baseDateFrom, setBaseDateFrom] = useState('2026-01-01');
  const [baseDateTo, setBaseDateTo] = useState(formatDate(new Date()));

  const [failList, setFailList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const columns = [
    { field: 'merchantId', headerName: '가맹점ID' },
    { field: 'baseDate', headerName: '기준일' },
    { field: 'txSeq', headerName: '거래순번' },
    { field: 'failCode', headerName: '실패코드' },
    { field: 'failMessage', headerName: '실패메시지' },
    { field: 'createdAt', headerName: '생성일' }
  ];

  
  useEffect(() => {
    handleMerchantList();
  }, []);

  useEffect(() => {
    handleSelect();
  }, [currentPage]);

  const handleSelect = async () => {

    try {

      const reqParams = {
        page: currentPage,
        size: pageSize,

        ...(merchantId ? { merchantId } : {}),

        ...(baseDateFrom
          ? { baseDateFrom: baseDateFrom.replaceAll('-', '') }
          : {}),

        ...(baseDateTo
          ? { baseDateTo: baseDateTo.replaceAll('-', '') }
          : {})
      };

      const { code, message, data } =
        await paymentFailApi.reqPostPaymentFailList(reqParams);

      if (code !== '0000') {
        throw new Error(message);
      }

      setFailList(data.list);
      setTotalCount(data.totalCount);

    } catch (err) {
      console.error(err);
    }
  };

  
  const handleMerchantList = async () => {
    try {

      const { code, message, data }
        = await merchantApi.reqGetMerchantList();

      if (code !== '0000') {
        throw new Error(message);
      }

      const options = [
        { label: '전체', value: '' },

        ...data.map(item => ({
          label: `${item.merchantId}`,
          // label: `${item.merchantId} - ${item.merchantName}`,
          value: item.merchantId
        }))
      ];

      setMerchantSelectOptions(options);

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
    <PaymentFailPageView
      merchantId={merchantId}
      setMerchantId={setMerchantId}

      baseDateFrom={baseDateFrom}
      setBaseDateFrom={setBaseDateFrom}

      baseDateTo={baseDateTo}
      setBaseDateTo={setBaseDateTo}

      failList={failList}
      totalCount={totalCount}

      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}
      merchantSelectOptions={merchantSelectOptions}

      onSelect={handleSelect}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onExcel={handleExcel}
      onPageChange={onPageChange}
    />
  );
}

export default PaymentFailPage;