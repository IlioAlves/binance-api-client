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
    console.table(data);
  } catch (error) {
    console.trace('Ops! We got an error:'.red, error.red);
  }
};
