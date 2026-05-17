import { useEffect, useState } from 'react';

import { cardReconciliationApi } from '@/pages/card/reconciliation/cardReconciliationApi';
import CardReconciliationPageView from '@/pages/card/reconciliation/CardReconciliationPageView';

import { merchantApi } from '@/pages/merchant/merchantApi';

function CardReconciliationPage() {

  const [merchantSelectOptions, setMerchantSelectOptions] = useState([]);

  const [merchantId, setMerchantId] = useState();
  const [reconciliationStatus, setReconciliationStatus] = useState();

  const formatDate = (d) => d.toISOString().slice(0, 10);

  const [baseDateFrom, setBaseDateFrom] = useState('2026-01-01');
  const [baseDateTo, setBaseDateTo] = useState(formatDate(new Date()));

  const [reconciliationList, setReconciliationList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const reconciliationStatusOptions = [
    { label: '전체', value: '' },
    { label: '정상', value: 'MATCH' },
    { label: '미정산', value: 'UNSETTLED' },
    { label: '상태불일치', value: 'STATUS_MISMATCH' },
    { label: '금액불일치', value: 'AMOUNT_MISMATCH' }
  ];

  const columns = [
    { field: 'merchantId', headerName: '가맹점ID' },
    { field: 'baseDate', headerName: '기준일' },
    { field: 'txSeq', headerName: '거래순번' },

    { field: 'merchantOrderId', headerName: '주문번호' },

    { field: 'payProvider', headerName: '결제기관' },
    { field: 'cardCompany', headerName: '카드사' },
    { field: 'vanName', headerName: 'VAN사' },

    { field: 'paymentAmount', headerName: '결제금액' },
    { field: 'settlementRequestAmount', headerName: '정산요청금액' },

    { field: 'feeAmount', headerName: '수수료' },
    { field: 'vatAmount', headerName: '부가세' },
    { field: 'settlementAmount', headerName: '정산금액' },

    { field: 'reconciliationStatusName', headerName: '대사상태' },

    { field: 'settlementDate', headerName: '정산일' },
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

        ...(reconciliationStatus
          ? { reconciliationStatus }
          : {}),

        ...(baseDateFrom
          ? { baseDateFrom: baseDateFrom.replaceAll('-', '') }
          : {}),

        ...(baseDateTo
          ? { baseDateTo: baseDateTo.replaceAll('-', '') }
          : {})
      };

      const { code, message, data }
        = await cardReconciliationApi.reqPostCardReconciliationList(reqParams);

      if (code !== '0000') {
        throw new Error(message);
      }

      setReconciliationList(data.list);
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
    <CardReconciliationPageView

      merchantId={merchantId}
      setMerchantId={setMerchantId}

      reconciliationStatus={reconciliationStatus}
      setReconciliationStatus={setReconciliationStatus}

      baseDateFrom={baseDateFrom}
      setBaseDateFrom={setBaseDateFrom}

      baseDateTo={baseDateTo}
      setBaseDateTo={setBaseDateTo}

      reconciliationList={reconciliationList}
      totalCount={totalCount}

      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}

      merchantSelectOptions={merchantSelectOptions}
      reconciliationStatusOptions={reconciliationStatusOptions}

      onSelect={handleSelect}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onExcel={handleExcel}
      onPageChange={onPageChange}
    />
  );
}

export default CardReconciliationPage;