export { NavigationActions } from 'react-navigation';

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const runOnMainThread = (func) => { setTimeout(func, 0); };

export const createAction = type => payload => ({ type, payload });
