import { NavigationActions } from 'react-navigation';

export const baseURL = 'http://192.168.43.218:8080';

export function dispatcher(props) {
  return props.dispatch || props.navigation.dispatch;
}

const Navigator = {
  reset: (route) => {
    return NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })],
    });
  },
  navigate: (route, params) => {
    return NavigationActions.navigate({ routeName: route, params });
  },
  back: () => {
    return NavigationActions.back();
  },
  replace: (dispatch, route, params) => {
    dispatch(NavigationActions.back());
    dispatch(NavigationActions.navigate({ routeName: route, params }));
  },
};

export default Navigator;
