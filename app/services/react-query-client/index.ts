import {QueryClient} from 'react-query';

const setupQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        notifyOnChangeProps: 'tracked',
        retry: false,
      },
    },
  });

  if (__DEV__) {
    import('react-query-native-devtools').then(({addPlugin}) => {
      addPlugin({queryClient});
    });
  }

  return queryClient;
};

export default setupQueryClient;
