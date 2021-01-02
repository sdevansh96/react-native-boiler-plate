import {OFFILE, ONLINE} from './actionType';

export const online = (payload) => ({
  type: ONLINE,
  payload,
});

export const offline = () => ({
  type: OFFILE,
});
