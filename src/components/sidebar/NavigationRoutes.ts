export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'services',
      displayName: 'menu.services',
      meta: {
        icon: 'credit_card',
      },
      children: [
        {
          name: 'apps',
          displayName: 'menu.apps',
        },
        {
          name: 'people',
          displayName: 'menu.people',
        },
        {
          name: 'manage',
          displayName: 'menu.manage',
        },
      ],
    },
  ] as INavigationRoute[],
}
