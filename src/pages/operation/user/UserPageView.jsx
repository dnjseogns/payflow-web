import Breadcrumb from '@/components/common/Breadcrumb';
import ActionBar from '@/components/common/ActionBar';
import SearchFilter from '@/components/search/SearchFilter';
import SearchItem from '@/components/search/SearchItem';
import SearchInput from '@/components/search/SearchInput';

import Grid from '@/components/grid/Grid';
import BreadcrumbContainer from '@/components/common/BreadcrumbContainer';

function UserPageView({
  userId,
  setUserId,
  userList,
  totalCount,

  currentPage,
  columns,
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
        title="사용자 관리"

        onSelect={onSelect}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onExcel={onExcel}
      />

      <SearchFilter>
        <SearchItem label="사용자ID">
          <SearchInput
            value={userId}
            onChange={setUserId}
          />
        </SearchItem>


        {/* <SearchItem label="상태">
          <SearchSelect
            value={status}
            onChange={setStatus}
            options={[
              { label: '전체', value: '' },
              { label: '정상', value: 'Y' },
              { label: '중지', value: 'N' }
            ]}
          />
        </SearchItem>

        <SearchItem label="조회기간">
          <SearchDateRange
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </SearchItem>
 */}



      </SearchFilter>

      <Grid
        columns={columns}
        data={userList}

        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}

        onPageChange={onPageChange}
      />

    </div>
  );
}

export default UserPageView;