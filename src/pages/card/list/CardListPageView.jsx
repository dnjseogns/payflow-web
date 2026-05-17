import BreadcrumbContainer from '@/components/common/BreadcrumbContainer';
import ActionBar from '@/components/common/ActionBar';

import SearchFilter from '@/components/search/SearchFilter';
import SearchItem from '@/components/search/SearchItem';
import SearchDateRange from '@/components/search/SearchDateRange';
import SearchSelect from '@/components/search/SearchSelect';
import SearchableDropdown from '@/components/search/SearchableDropdown';

import Grid from '@/components/grid/Grid';

function CardListPageView({

  merchantId,
  setMerchantId,

  settlementStatus,
  setSettlementStatus,

  baseDateFrom,
  setBaseDateFrom,

  baseDateTo,
  setBaseDateTo,

  settlementStatusSelectOptions,
  merchantSelectOptions,

  cardList,
  totalCount,

  columns,
  currentPage,
  pageSize,

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
        title="카드 정산 조회"
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

        <SearchItem label="정산상태">
          <SearchSelect
            value={settlementStatus}
            options={settlementStatusSelectOptions}
            onChange={setSettlementStatus}
          />
        </SearchItem>

      </SearchFilter>

      <Grid
        columns={columns}
        data={cardList}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />

    </div>
  );
}

export default CardListPageView;