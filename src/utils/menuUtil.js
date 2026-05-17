export const findBreadcrumb = (menuList, pathname) => {

  const recursive = (menus, parents = []) => {

    for (const menu of menus) {

      const currentPath = [
        ...parents,
        menu.menuName
      ];

      // 현재 메뉴 일치
      if (menu.menuUrl === pathname) {
        return currentPath;
      }

      // 하위 메뉴 탐색
      if (menu.children?.length > 0) {

        const result = recursive(
          menu.children,
          currentPath
        );

        if (result) {
          return result;
        }
      }
    }

    return null;
  };

  return recursive(menuList) || [];
};


export function flattenMenu(menuList) {
  const result = [];

  const dfs = (menus) => {
    menus.forEach(menu => {
      result.push(menu);

      if (menu.children && menu.children.length > 0) {
        dfs(menu.children);
      }
    });
  };

  dfs(menuList);

  return result;
}