import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Menu() {

  const menuList = useSelector(
    state => state.menu.menuList
  );

  return (
    <nav>

      {menuList.map(menu => {

        const hasChildren =
          menu.children &&
          menu.children.length > 0;

        // 1depth 단독 메뉴
        if (!hasChildren && menu.menuUrl) {
          return (
            <NavLink
              key={menu.menuId}
              to={menu.menuUrl}
              className={({ isActive }) =>
                isActive ? 'top-menu active' : 'top-menu'
              }
            >
              {menu.menuName}
            </NavLink>
          );
        }

        // 1depth + children
        return (
          <div
            key={menu.menuId}
            className="top-menu-dropdown"
          >

            <div className="top-menu-title">
              {menu.menuName}
            </div>

            <div className="dropdown-menu">

              {menu.children.map(child => (
                <NavLink
                  key={child.menuId}
                  to={child.menuUrl}
                  className={({ isActive }) =>
                    isActive
                      ? 'dropdown-item active'
                      : 'dropdown-item'
                  }
                >
                  {child.menuName}
                </NavLink>
              ))}

            </div>

          </div>
        );
      })}

    </nav>
  );
}

export default Menu;