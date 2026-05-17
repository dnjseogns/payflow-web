import BreadcrumbContainer from '@/components/common/BreadcrumbContainer';
import ActionBar from '@/components/common/ActionBar';

import SearchFilter from '@/components/search/SearchFilter';
import SearchItem from '@/components/search/SearchItem';
import SearchSelect from '@/components/search/SearchSelect';
import SearchDateRange from '@/components/search/SearchDateRange';
import SearchableDropdown from '@/components/search/SearchableDropdown';

import Grid from '@/components/grid/Grid';

import '@/css/pages/statisticsListPage.css';

function StatisticsListPageView({

  merchantId,
  setMerchantId,

  baseDateFrom,
  setBaseDateFrom,

  baseDateTo,
  setBaseDateTo,

  payMethod,
  setPayMethod,

  payProvider,
  setPayProvider,

  payMethodSelectOptions,
  merchantSelectOptions,

  summary,

  statisticsList,
  totalCount,

  columns,

  currentPage,
  pageSize,

  onSelect,
  onExcel,
  onPageChange

}) {

  return (
    <div className="page-container">

      <BreadcrumbContainer />

      <ActionBar
        title="거래 집계 리포트"
        onSelect={onSelect}
        onExcel={onExcel}
        hideAdd={true}
        hidecreate={true}
        hideUpdate={true}
        hideDelete={true}
      />

      {/* ===================================================== */}
      {/* search */}
      {/* ===================================================== */}

      <SearchFilter>

        <SearchItem label="가맹점ID">
          <SearchableDropdown
            value={merchantId}
            options={merchantSelectOptions}
            onChange={setMerchantId}
            placeholder="가맹점 ID 검색"
          />
        </SearchItem>

        <SearchItem label="조회기간">
          <SearchDateRange
            startDate={baseDateFrom}
            endDate={baseDateTo}
            onStartDateChange={setBaseDateFrom}
            onEndDateChange={setBaseDateTo}
          />
        </SearchItem>

        <SearchItem label="결제수단">
          <SearchSelect
            value={payMethod}
            options={payMethodSelectOptions}
            onChange={setPayMethod}
          />
        </SearchItem>

        {/* <SearchItem label="결제기관">
          <SearchSelect
            value={payProvider}
            options={payProviderSelectOptions}
            onChange={setPayProvider}
          />
        </SearchItem> */}

      </SearchFilter>

      {/* ===================================================== */}
      {/* summary */}
      {/* ===================================================== */}

      <div className="statistics-summary-container">

        <div className="statistics-summary-row">
          <div>
            승인건수 :
            <strong>{summary.approveCnt?.toLocaleString()}</strong>
          </div>

          <div>
            실패건수 :
            <strong>{summary.failCnt?.toLocaleString()}</strong>
          </div>

          <div>
            취소건수 :
            <strong>{summary.cancelCnt?.toLocaleString()}</strong>
          </div>
        </div>

        <div className="statistics-summary-row">
          <div>
            승인금액 :
            <strong>
              {summary.approveAmount?.toLocaleString()}원
            </strong>
          </div>
        </div>

        <div className="statistics-summary-row">
          <div>
            실패율 :
            <strong>{summary.failRate}%</strong>
          </div>

          <div>
            취소율 :
            <strong>{summary.cancelRate}%</strong>
          </div>
        </div>

      </div>

      {/* ===================================================== */}
      {/* grid */}
      {/* ===================================================== */}

      <Grid
        columns={columns}
        data={statisticsList}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />

    </div>
  );
}

export default StatisticsListPageView;