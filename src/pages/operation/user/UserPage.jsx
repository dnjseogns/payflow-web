import { useState, useEffect } from 'react';
import {userApi} from '@/pages/operation/user/userApi.js';
import UserPageView from '@/pages/operation/user/UserPageView';

function UserPage() {
  // 요청param
  const [userId, setUserId] = useState();
  // 응답결과
  const [userList, setUserList] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  //grid 관련
  const [currentPage,setCurrentPage] = useState(1);
  const pageSize = 10;
  const columns = [
    {
      field: 'userId',
      headerName: '사용자ID'
    },
    {
      field: 'userName',
      headerName: '사용자명'
    },
    {
      field: 'roleCode',
      headerName: '권한'
    },
    {
      field: 'useYn',
      headerName: '사용여부'
    }
  ];

  useEffect(() => {
    handleSelect();
  }, []);

  const handleSelect = async (changedPage) => {
    try {
      const reqParams = {
        page:changedPage,
        size:pageSize,
        ...(userId !== undefined && userId !== null ? { userId } : {}),
      };
      const { code, message, data } = await userApi.reqGetUserList(reqParams);
      if (code != '0000') {
        throw new Error(message);
      }
      setUserList(data.list);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = () => {
    window.alert('개발 진행 중입니다.');
    console.log('추가');
  };

  const handleUpdate = () => {
    window.alert('개발 진행 중입니다.');
    console.log('수정');
  };

  const handleDelete = () => {
    window.alert('개발 진행 중입니다.');
    console.log('삭제');
  };

  const handleExcel = () => {
    window.alert('개발 진행 중입니다.');
    console.log('엑셀');
  };

  const onPageChange = (changedPage) => {
    handleSelect(changedPage);
    setCurrentPage(changedPage);
  }

  return (
    <UserPageView
      userId={userId} 
      setUserId={setUserId}
      userList={userList}
      totalCount={totalCount}

      columns={columns}
      currentPage={currentPage}
      pageSize={pageSize}

      onSelect={handleSelect}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onExcel={handleExcel}
      onPageChange={onPageChange}
    />
  );
}

export default UserPage;