import { useEffect, useState } from 'react';
import { statisticsRetryPageApi } from '@/pages/statistics/retry/statisticsRetryPageApi.js';
import StatisticsRetryPageView from '@/pages/statistics/retry/StatisticsRetryPageView.jsx';

function StatisticsRetryPage() {

  const formatDate = (d) => d.toISOString().slice(0, 10);

  // search params
  const [baseDateFrom, setBaseDateFrom] = useState('2026-01-01');
  const [baseDateTo, setBaseDateTo] = useState(formatDate(new Date()));

  // result
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // paging
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const columns = [
    { field: 'baseDate', headerName: '기준일' },
    { field: 'aggStatus', headerName: '상태' },
    { field: 'aggStatusName', headerName: '상태명' },
    { field: 'aggStartAt', headerName: '시작시간' },
    { field: 'aggEndAt', headerName: '종료시간' },
    { field: 'retryCount', headerName: '재시도' },
    { field: 'errorMessage', headerName: '에러메시지' },
    { field: 'createdAt', headerName: '생성일' },
    { field: 'updatedAt', headerName: '수정일' }
  ];

  useEffect(() => {
    handleSelect();
  }, [currentPage]);

  const handleSelect = async () => {
    try {

      const reqParams = {
        page: currentPage,
        size: pageSize,

        ...(baseDateFrom ? { baseDateFrom: baseDateFrom.replaceAll('-', '') } : {}),
        ...(baseDateTo ? { baseDateTo: baseDateTo.replaceAll('-', '') } : {})
      };

      console.log('reqParams', reqParams);

      const { code, message, data } =
        await statisticsRetryPageApi.reqPostStatisticsRetryList(reqParams);

      if (code !== '0000') {
        throw new Error(message);
      }

      setList(data.list);
      setTotalCount(data.totalCount);

    } catch (err) {
      console.error(err);
    }
  };

  const onPageChange = (changedPage) => {
    setCurrentPage(changedPage);
  };

  const handleRetry = () => alert('개발 진행 중');
  const handleAdd = () => alert('개발 진행 중');
  const handleUpdate = () => alert('개발 진행 중');
  const handleDelete = () => alert('개발 진행 중');
  const handleExcel = () => alert('개발 진행 중');

  return (
    <StatisticsRetryPageView
      baseDateFrom={baseDateFrom}
      setBaseDateFrom={setBaseDateFrom}
      baseDateTo={baseDateTo}
      setBaseDateTo={setBaseDateTo}

      list={list}
      totalCount={totalCount}

      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}

      onRetry={handleRetry}
      onSelect={handleSelect}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onExcel={handleExcel}
      onPageChange={onPageChange}
    />
  );
}

export default StatisticsRetryPage;