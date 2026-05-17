import BreadcrumbContainer from '@/components/common/BreadcrumbContainer';
import ActionBar from '@/components/common/ActionBar';

import SearchFilter from '@/components/search/SearchFilter';
import SearchItem from '@/components/search/SearchItem';

import SearchDateRange from '@/components/search/SearchDateRange';
import SearchableDropdown from '@/components/search/SearchableDropdown';
import SearchSelect from '@/components/search/SearchSelect';

import Grid from '@/components/grid/Grid';

function CardReconciliationPageView({

  merchantId,
  setMerchantId,

  reconciliationStatus,
  setReconciliationStatus,

  baseDateFrom,
  setBaseDateFrom,

  baseDateTo,
  setBaseDateTo,

  reconciliationList,
  totalCount,

  columns,
  currentPage,
  pageSize,

  merchantSelectOptions,
  reconciliationStatusOptions,

  onSelect,
  onAdd,
  onUpdate,
  onDelete,
  onExcel,
  onPageChange
}) {

  return (
    <div className="page-container">

      <BreadcrumbContainer />

      <ActionBar
        title="카드 대사조회"
        onSelect={onSelect}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onExcel={onExcel}
      />

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

        <SearchItem label="대사상태">
          <SearchSelect
            value={reconciliationStatus}
            options={reconciliationStatusOptions}
            onChange={setReconciliationStatus}
          />
        </SearchItem>

      </SearchFilter>

      <Grid
        columns={columns}
        data={reconciliationList}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />

    </div>
  );
}

export default CardReconciliationPageView;