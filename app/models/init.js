import { init } from '../services/init';

export default {
  namespace: 'init',
  state: {
  },
  effects: {
    * loading(_, { call }) {
      yield call(init);
    },
  },
  reducers: {
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loading' });
    },
  },
};
