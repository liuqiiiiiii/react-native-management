import { createAction } from '../helper';

export default {
  namespace: 'personalInformation',
  state: {
    teacherInformation: [],

    studentsInformation: [],
  },

  effects: {
    * saveTeacherPersonal({ payload }, { put }) {
      console.log(`saveTeacherPersonal ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ teacherInformation: payload.data }));
    },

    * saveStudentsPersonal({ payload }, { put }) {
      console.log(`saveStudentsPersonal ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ studentsInformation: payload.data }));
    },
  },

  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
