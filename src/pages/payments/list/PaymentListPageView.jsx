import BreadcrumbContainer from '@/components/common/BreadcrumbContainer';
import ActionBar from '@/components/common/ActionBar';

import SearchFilter from '@/components/search/SearchFilter';
import SearchItem from '@/components/search/SearchItem';
import SearchInput from '@/components/search/SearchInput';
import SearchSelect from '@/components/search/SearchSelect';
import SearchDateRange from '@/components/search/SearchDateRange';
import SearchableDropdown from '@/components/search/SearchableDropdown';

import Grid from '@/components/grid/Grid';

function PaymentListPageView({
  merchantId,
  setMerchantId,

  payMethod,
  setPayMethod,

  payStatus,
  setPayStatus,

  baseDateFrom,
  setBaseDateFrom,

  baseDateTo,
  setBaseDateTo,

  payMethodSelectOptions,
  payStatusSelectOptions,

  paymentList,
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
        title="결제 조회"
        onSelect={onSelect}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onExcel={onExcel}
      />

      <SearchFilter>


        {/* <SearchItem label="가맹점ID">
          <SearchInput
            value={merchantId}
            onChange={setMerchantId}
          />
        </SearchItem> */}
        <SearchItem label="가맹점ID">
          <SearchableDropdown
            value={merchantId}
            options={[
              { label: 'M001', value: 'M001' },
              { label: 'M002', value: 'M002' },
              { label: 'M003', value: 'M003' }
            ]}
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

        <SearchItem label="상태">
          <SearchSelect
            value={payStatus}
            options={payStatusSelectOptions}
            onChange={setPayStatus}
          />
        </SearchItem>

        {/* 추후 확장 */}
        {/*
        <SearchItem label="조회기간">
          <SearchDateRange
            startDate={baseDateFrom}
            endDate={baseDateTo}
            onStartDateChange={setBaseDateFrom}
            onEndDateChange={setBaseDateTo}
          />
        </SearchItem>
        */}

      </SearchFilter>

      <Grid
        columns={columns}
        data={paymentList}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />

    </div>
  );
}

export default PaymentListPageView;