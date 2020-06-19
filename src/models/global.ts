import { Subscription, Effect } from 'dva';
import { Reducer } from 'redux';

function sleep(timeountMS: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeountMS);
  });
}

function randomizator(a: number) {
  return Math.floor(Math.random() * a);
}

function PS(key: string, tip?: string) {
  return new Promise(async (resolve, reject) => {
    const ms = randomizator(2000);
    await sleep(ms);
    console.log(key, ms, tip || '----------');
    resolve(key);
  });
}

export interface IGlobalModel {
  namespace: 'global';
  state: any;
  effects: {
    pageInit: Effect;
  };
  reducers: {
    updateValue: Reducer<any>;
    updateOne: Reducer<any>;
    updateTwo: Reducer<any>;
    updateThr: Reducer<any>;
  };
  subscriptions?: { setup: Subscription };
}

const Part: IGlobalModel = {
  namespace: 'global',
  state: {
    value: 'REDUX',
    one: '-',
    two: '-',
    thr: '-',
  },
  effects: {
    *pageInit({ callback }, { put, all, call }) {
      // PS('ONE', '未排序');
      // PS('TWO', '未排序');
      // PS('THR', '未排序');

      const ONE = yield call(PS, 'ONE');
      yield put({
        type: 'updateOne',
        payload: ONE,
      });
      const TWO = yield call(PS, 'TWO');
      yield put({
        type: 'updateTwo',
        payload: TWO,
      });
      const THR = yield call(PS, 'THR');
      yield put({
        type: 'updateThr',
        payload: THR,
      });

      callback();
    },
  },

  reducers: {
    updateValue(state, { payload }) {
      return { ...state, value: payload };
    },
    updateOne(state, { payload }) {
      return { ...state, one: payload };
    },
    updateTwo(state, { payload }) {
      return { ...state, two: payload };
    },
    updateThr(state, { payload }) {
      return { ...state, thr: payload };
    },
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(location => {
        const { pathname } = location;
        // console.log(pathname);
      });
    },
  },
};

export default Part;
