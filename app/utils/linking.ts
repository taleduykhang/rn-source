const config = {
  screens: {
    Home: 'home',
    // BottomAccount: 'account',
    // notification: 'notification',
    //   Profile: {
    //     path: "profile/:id",
    //     parse: {
    //       id: (id:) => `${id}`,
    //     },
    //   },
    //   Notifications: "notifications",
    //   Settings: "settings",
  },
};

const linking = {
  prefixes: ['https://appName.page.link', 'appName://'],
  config,
};

export default linking;
