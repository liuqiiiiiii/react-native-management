import { createAction } from '../helper';

export default {
  namespace: 'annoucement',
  state: {
    title: [{
      id: 4,
      title: '关于本班实施计划生育的问题',
      content: 'tongyuehong suan le',
    }, {
      id: 3,
      title: '国家主席习近平莅临本校',
    }, {
      id: 2,
      title: '校内免费发放iPhone，先到先得',
    }, {
      id: 1,
      title: '致开车上学的同学',
    }],

    selectedMessage: {},
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
