import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Breadcrumb from '@/components/common/Breadcrumb';

import { findBreadcrumb } from '@/utils/menuUtil';

function BreadcrumbContainer() {

  const location = useLocation();

  const menuList = useSelector(state => state.menu.menuList);

  const items = findBreadcrumb(menuList, location.pathname);

  // console.log("menuList",menuList);
  // console.log("items",items);

  return (
    <Breadcrumb
      items={items}
    />
  );
}

export default BreadcrumbContainer;