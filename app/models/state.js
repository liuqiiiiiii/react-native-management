import { createAction } from '../helper';

export default {
  namespace: 'state',
  state: {
    student: true,
    className: '',
  },

  effects: {
    * switchToStudent(payload, { put }) {
      yield put(createAction('update')({ student: true }));
    },

    * switchToTeacher(payload, { put }) {
      yield put(createAction('update')({ student: false }));
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
