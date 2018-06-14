import { createAction } from '../helper';

export default {
  namespace: 'state',
  state: {
    student: true,
    className: '',
    loginName: '',
  },

  effects: {
    * switchToStudent(payload, { put }) {
      yield put(createAction('update')({ student: true }));
    },

    * switchToTeacher(payload, { put }) {
      yield put(createAction('update')({ student: false }));
    },

    * saveLoginName({ payload }, { put }) {
      console.log(`state saveLoginName:${JSON.stringify(payload)}`);
      yield put(createAction('update')({ loginName: payload }));
    },

    * saveClass({ payload }, { put }) {
      console.log(`state saveClass:${JSON.stringify(payload)}`);
      yield put(createAction('update')({ className: payload.data }));
    },
  },

  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
