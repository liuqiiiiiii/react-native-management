import { createAction } from '../helper';

export default {
  namespace: 'personalInformation',
  state: {
    teacherInformation: [],

    studentInformation: [],
  },

  effects: {
    * saveTeacherPersonal({ payload }, { put }) {
      console.log(`saveTeacherPersonal ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ teacherInformation: payload.data }));
    },

    * saveStudentsPersonal({ payload }, { put }) {
      console.log(`saveStudents ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ studentInformation: payload.data }));
    },
  },

  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
