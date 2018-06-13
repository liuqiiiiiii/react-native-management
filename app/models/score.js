import { createAction } from '../helper';

export default {
  namespace: 'score',
  state: {
    theTeacherInCharge: [{
      id: 1,
      edit: '编辑',
      name: '刘琦',
      gender: '男',
      QQ: '982252163',
      wechat: 'liuqi982252163',
      phone: '18331295996',
      address: '一校区单身楼613',
    }],

    classCadre: [],

    classmate: [],
  },
  effects: {
    * saveStudents({ payload }, { put }) {
      console.log(`saveStudents ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ theTeacherInCharge: payload.data }));
      yield put(createAction('update')({ classCadre: payload.data }));
      yield put(createAction('update')({ classmate: payload.data }));
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
