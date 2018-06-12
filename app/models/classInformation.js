import { createAction } from '../helper';

export default {
  namespace: 'classInformation',
  state: {
    theTeacherInCharge: [{
      id: 1,
      image: 'https://avatars0.githubusercontent.com/u/32216634?s=460&v=4',
      name: '刘琦',
      gender: '男',
      qq: '982252163',
      wechat: 'liuqi982252163',
      mobilePhone: '18233286287',
      office: '一校区单身楼613',
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
