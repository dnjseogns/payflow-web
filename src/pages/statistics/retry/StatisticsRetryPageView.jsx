import BreadcrumbContainer from '@/components/common/BreadcrumbContainer';
import ActionBar from '@/components/common/ActionBar';

import SearchFilter from '@/components/search/SearchFilter';
import SearchItem from '@/components/search/SearchItem';
import SearchDateRange from '@/components/search/SearchDateRange';

import Grid from '@/components/grid/Grid';

function StatisticsRetryPageView({
  baseDateFrom,
  setBaseDateFrom,
  baseDateTo,
  setBaseDateTo,

  list,
  totalCount,

  columns,
  currentPage,
  pageSize,

  onRetry,
  onSelect,
  onAdd,
  onUpdate,
  onDelete,
  onExcel,
  onPageChange
}) {

  const retryButton = <button onClick={onRetry} >재집계</button>;
  return (
    <div className="page-container">

      <BreadcrumbContainer />


      <ActionBar
        title="결제집계재처리"
        onSelect={onSelect}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onExcel={onExcel}
        actions={[retryButton]}
      />

      <SearchFilter>

        <SearchItem label="조회기간">
          <SearchDateRange
            startDate={baseDateFrom}
            endDate={baseDateTo}
            onStartDateChange={setBaseDateFrom}
            onEndDateChange={setBaseDateTo}
          />
        </SearchItem>

      </SearchFilter>

      <Grid
        columns={columns}
        data={list}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />

    </div>
  );
}

export default StatisticsRetryPageView;