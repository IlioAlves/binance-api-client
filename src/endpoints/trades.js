// @flow
import rp from 'request-promise';
import console from 'better-console';
import 'colors';

export default async (args: { symbol: string, limit: number }) => {
  const { symbol, limit } = args;

  try {
    const data: Array<mixed> = await rp({
      uri: 'https://api.binance.com/api/v1/trades',
      qs: {
        symbol,
        limit,
      },
      json: true,
    });
    return data;
  } catch (error) {
    throw Error(error);
  }
};
