// @flow
import rp from 'request-promise';
import 'colors';

export default async () => {
  try {
    const data: {
      serverTime: number,
    } = await rp({
      uri: 'https://api.binance.com/api/v1/time',
      json: true,
    });
    return data;
  } catch (error) {
    throw Error(error);
  }
};
