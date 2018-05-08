export const PING_ACTION_TYPE = 'PING';
export const PONG_ACTION_TYPE = 'PONG';

export const ping = () => ({ type: PING_ACTION_TYPE });
export const pong = () => ({ type: PONG_ACTION_TYPE });
