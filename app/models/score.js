import { createAction } from '../helper';

export default {
  namespace: 'score',
  state: {
    classScore: [],
  },
  
  effects: {
    * saveScore({ payload }, { put }) {
      console.log(`saveScore ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ classScore: payload.data }));
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
