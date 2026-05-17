import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { cardListApi } from '@/pages/card/list/cardListApi';
import CardListPageView from '@/pages/card/list/CardListPageView';

import { merchantApi } from '@/pages/merchant/merchantApi.js';

function CardListPage() {

  const settlementStatusOptions = useSelector(
    state => state.code.codeList['SETTLEMENT_STATUS'] || []
  );

  const settlementStatusSelectOptions = [
    { label: '전체', value: '' },

    ...settlementStatusOptions.map(item => ({
      label: item.codeName,
      value: item.code
    }))
  ];

  const [merchantSelectOptions, setMerchantSelectOptions] = useState([]);

  // search params
  const [merchantId, setMerchantId] = useState();
  const [settlementStatus, setSettlementStatus] = useState();

  const formatDate = (d) => d.toISOString().slice(0, 10);

  const [baseDateFrom, setBaseDateFrom] = useState('2026-01-01');
  const [baseDateTo, setBaseDateTo] = useState(formatDate(new Date()));

  // result
  const [cardList, setCardList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // paging
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const columns = [
    { field: 'merchantId', headerName: '가맹점ID' },
    { field: 'baseDate', headerName: '기준일' },
    { field: 'txSeq', headerName: '거래순번' },
    { field: 'cardCompany', headerName: '카드사' },
    { field: 'amount', headerName: '결제금액' },
    { field: 'feeAmount', headerName: '수수료' },
    { field: 'vatAmount', headerName: '부가세' },
    { field: 'settlementAmount', headerName: '정산금액' },
    { field: 'settlementStatusName', headerName: '정산상태' },
    { field: 'settlementDate', headerName: '정산일' }
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
        ...(settlementStatus ? { settlementStatus } : {}),

        ...(baseDateFrom
          ? { baseDateFrom: baseDateFrom.replaceAll('-', '') }
          : {}),

        ...(baseDateTo
          ? { baseDateTo: baseDateTo.replaceAll('-', '') }
          : {})
      };

      const { code, message, data }
        = await cardListApi.reqPostCardList(reqParams);

      if (code !== '0000') {
        throw new Error(message);
      }

      setCardList(data.list);
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
    <CardListPageView
      merchantId={merchantId}
      setMerchantId={setMerchantId}

      settlementStatus={settlementStatus}
      setSettlementStatus={setSettlementStatus}

      baseDateFrom={baseDateFrom}
      setBaseDateFrom={setBaseDateFrom}

      baseDateTo={baseDateTo}
      setBaseDateTo={setBaseDateTo}

      settlementStatusSelectOptions={settlementStatusSelectOptions}
      merchantSelectOptions={merchantSelectOptions}

      cardList={cardList}
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

export default CardListPage;