export const menus = [
  {
    menuName: '首页',
    menuLevel: 1,
    id: '1',
    menuUrl: '/home/home',
    menuIcon: '',
  },
  {
    menuName: '考试',
    menuLevel: 1,
    id: '2',
    menuIcon: '',
    children: [
      {
        menuName: '考场管理',
        menuLevel: 2,
        id: '2-1',
        menuUrl: '/home/exam/manage',
        menuIcon: '',
      },
      {
        menuName: '考场设置',
        menuLevel: 2,
        id: '2-2',
        menuUrl: '/home/exam/setting',
        menuIcon: '',
      },
    ],
  },
];
