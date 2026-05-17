import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {flattenMenu} from '@/utils/menuUtil';

function ActionBar({
  title,
  onSelect,
  onAdd,
  onUpdate,
  onDelete,
  onExcel,
  hideSelect = false,
  hideAdd = false,
  hideUpdate = false,
  hideDelete = false,
  hideExcel = false,
  actions = []
}) {

  const location = useLocation();
  const menuTree = useSelector(state => state.menu.menuList || []);
  // 트리구조 -> flatten
  const flatMenuList = flattenMenu(menuTree);

  // 현재 메뉴 찾기
  const currentMenu = flatMenuList.find(
    menu => menu.menuUrl === location.pathname
  ) || {};

    const isRead = currentMenu?.readYn === 'Y' ;
    const isCreate = currentMenu?.createYn === 'Y' ;
    const isUpdate = currentMenu?.updateYn === 'Y' ;
    const isDelete = currentMenu?.deleteYn === 'Y' ;
    const isExcel = currentMenu?.excelYn === 'Y' ;
    
  return (
    <div className="action-bar">

      
      <h2>{title}</h2>

      <div className="action-buttons">
        {actions}

        {hideSelect 
        ? null 
        : <button onClick={onSelect} disabled={!isRead}>
          조회
        </button>}
        
        {hideAdd 
        ? null 
        : <button onClick={onAdd} disabled={!isCreate}>
          추가
        </button>}
        

        {hideUpdate 
        ? null 
        : <button onClick={onUpdate} disabled={!isUpdate}>
          수정
        </button>}
        

        {hideDelete 
        ? null 
        : <button onClick={onDelete} disabled={!isDelete}>
          삭제
        </button>}

        {hideExcel
        ? null 
        : <button onClick={onExcel} disabled={!isExcel}>
          Excel
        </button>}
        

      </div>

    </div>
  );
}

export default ActionBar;