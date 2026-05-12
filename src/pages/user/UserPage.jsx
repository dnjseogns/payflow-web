import { useState } from 'react';

import UserPageView from '@/pages/user/UserPageView';

function UserPage() {

  const [userList, setUserList] = useState([]);

  const handleSelect = () => {
    console.log('조회');
  };

  const handleAdd = () => {
    console.log('추가');
  };

  const handleUpdate = () => {
    console.log('수정');
  };

  const handleDelete = () => {
    console.log('삭제');
  };

  const handleExcel = () => {
    console.log('엑셀');
  };

  return (
    <UserPageView
      userList={userList}

      onSelect={handleSelect}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onExcel={handleExcel}
    />
  );
}

export default UserPage;