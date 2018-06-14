import { createAction } from '../helper';

export default {
  namespace: 'classInformation',
  state: {
    theTeacherInCharge: [],

    classCadre: [],

    classmate: [],
  },

  effects: {
    * saveTeacher({ payload }, { put }) {
      console.log(`saveTeacher ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ theTeacherInCharge: payload.data }));
    },

    * saveCadre({ payload }, { put }) {
      console.log(`saveCadre ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ classCadre: payload.data }));
    },

    * saveStudents({ payload }, { put }) {
      console.log(`saveStudents ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ classmate: payload.data }));
    },
  },

  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
