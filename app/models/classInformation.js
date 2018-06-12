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

    classCadre: [{
      id: 1,
      image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=845061817,3482904951&fm=27&gp=0.jpg',
      position: '班长',
      name: '徐基欣',
      gender: '男',
      class: '计算机14k2班',
      studentID: '141909010222',
      mobilePhone: '18331290137',
    }],

    ordinary: [],
  },
  effects: {
    * saveStudents({ payload }, { put }) {
      console.log(`saveStudents ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ ordinary: payload.data }));
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
