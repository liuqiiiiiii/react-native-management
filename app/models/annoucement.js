import { createAction } from '../helper';

export default {
  namespace: 'annoucement',
  state: {
    announce: [],

    selectedMessage: [],
  },

  effects: {
    * saveMessages({ payload }, { put }) {
      console.log(`saveMessages ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ title: payload.data }));
    },
  
    * saveSelect({ payload }, { put }) {
      console.log(`saveSelect ${JSON.stringify(payload)}`);
      yield put(createAction('update')({ selectedMessage: payload.item }));
    },
  },

  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
