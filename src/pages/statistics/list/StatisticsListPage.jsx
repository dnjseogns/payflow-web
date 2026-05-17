import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { statisticsListApi } from '@/pages/statistics/list/statisticsListApi';
import StatisticsListPageView from '@/pages/statistics/list/StatisticsListPageView';
import { merchantApi } from '@/pages/merchant/merchantApi.js';

function StatisticsListPage() {

  const [merchantSelectOptions, setMerchantSelectOptions] = useState([]);
  const payMethodOptions = useSelector(
    state => state.code.codeList['PAY_METHOD'] || []
  );

  // const payProviderOptions = useSelector(
  //   state => [
  //     ...(state.code.codeList['CARD_COMPANY'] || []),
  //     ...(state.code.codeList['BANK_CODE'] || []),
  //     ...(state.code.codeList['TELECOM_COMPANY'] || []),
  //     ...(state.code.codeList['EASY_PAY_TYPE'] || [])
  //   ]
  // );

  const payMethodSelectOptions = [
    { label: '전체', value: '' },

    ...payMethodOptions.map(item => ({
      label: item.codeName,
      value: item.code
    }))
  ];

  // const payProviderSelectOptions = [
  //   { label: '전체', value: '' },

  //   ...payProviderOptions.map(item => ({
  //     label: item.codeName,
  //     value: item.code
  //   }))
  // ];

  // =========================================================
  // search params
  // =========================================================

  const formatDate = (d) => d.toISOString().slice(0, 10);

  const [merchantId, setMerchantId] = useState('');

  const [baseDateFrom, setBaseDateFrom] = useState('2026-01-01');
  const [baseDateTo, setBaseDateTo] = useState(formatDate(new Date()));

  const [payMethod, setPayMethod] = useState('');
  const [payProvider, setPayProvider] = useState('');

  // =========================================================
  // summary
  // =========================================================

  const [summary, setSummary] = useState({
    approveCnt: 0,
    approveAmount: 0,
    failCnt: 0,
    cancelCnt: 0,
    failRate: 0,
    cancelRate: 0
  });

  // =========================================================
  // detail
  // =========================================================

  const [statisticsList, setStatisticsList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // =========================================================
  // paging
  // =========================================================

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // =========================================================
  // grid columns
  // =========================================================

  const columns = [
    { field: 'baseDate', headerName: '기준일' },
    { field: 'merchantId', headerName: '가맹점ID' },
    { field: 'payMethod', headerName: '결제수단' },

    { field: 'approveCnt', headerName: '승인건수' },
    { field: 'failCnt', headerName: '실패건수' },
    { field: 'cancelCnt', headerName: '취소건수' },

    { field: 'approveAmount', headerName: '총금액' }
  ];

  useEffect(() => {
    handleMerchantList();
  }, []);

  
  useEffect(() => {
    handleSelect();
  }, [currentPage]);

  const buildReqParams = () => {

    return {
      page: currentPage,
      size: pageSize,

      ...(merchantId ? { merchantId } : {}),
      ...(payMethod ? { payMethod } : {}),
      ...(payProvider ? { payProvider } : {}),

      ...(baseDateFrom
        ? { baseDateFrom: baseDateFrom.replaceAll('-', '') }
        : {}),

      ...(baseDateTo
        ? { baseDateTo: baseDateTo.replaceAll('-', '') }
        : {})
    };
  };

  const handleSelect = async () => {

    try {

      const reqParams = buildReqParams();

      const summaryRes =
        await statisticsListApi.reqPostSummary(reqParams);

      const detailRes =
        await statisticsListApi.reqPostDetail(reqParams);

      if (summaryRes.code !== '0000') {
        throw new Error(summaryRes.message);
      }

      if (detailRes.code !== '0000') {
        throw new Error(detailRes.message);
      }

      setSummary(summaryRes.data);

      setStatisticsList(detailRes.data.list);
      setTotalCount(detailRes.data.totalCount);

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


  const onPageChange = (changedPage) => {
    setCurrentPage(changedPage);
  };

  const handleExcel = () => alert('개발 진행 중');

  return (
    <StatisticsListPageView

      merchantId={merchantId}
      setMerchantId={setMerchantId}

      baseDateFrom={baseDateFrom}
      setBaseDateFrom={setBaseDateFrom}

      baseDateTo={baseDateTo}
      setBaseDateTo={setBaseDateTo}

      payMethod={payMethod}
      setPayMethod={setPayMethod}

      payProvider={payProvider}
      setPayProvider={setPayProvider}

      merchantSelectOptions={merchantSelectOptions}
      payMethodSelectOptions={payMethodSelectOptions}

      summary={summary}

      statisticsList={statisticsList}
      totalCount={totalCount}

      columns={columns}

      currentPage={currentPage}
      pageSize={pageSize}

      onSelect={handleSelect}
      onExcel={handleExcel}
      onPageChange={onPageChange}

    />
  );
}

export default StatisticsListPage;