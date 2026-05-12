import Breadcrumb from '@/components/common/Breadcrumb';
import ActionBar from '@/components/common/ActionBar';
import SearchFilter from '@/components/common/SearchFilter';
import Grid from '@/components/common/Grid';

function UserPageView({
  userList,

  onSelect,
  onAdd,
  onUpdate,
  onDelete,
  onExcel
}) {

  return (
    <div className="page-container">

      <Breadcrumb
        items={['홈', '사용자 관리']}
      />

      <ActionBar
        title="사용자 관리"

        onSelect={onSelect}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onExcel={onExcel}
      />

      <SearchFilter>
        검색조건 영역
      </SearchFilter>

      <Grid
        data={userList}
      />

    </div>
  );
}

export default UserPageView;