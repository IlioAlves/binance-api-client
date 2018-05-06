// @flow
import rp from 'request-promise';

export default async function exchangeInfo() {
  try {
    const data: Array<mixed> = await rp({
      uri: 'https://api.binance.com/api/v1/exchangeInfo',
      json: true,
    });

    data.symbols = data.symbols.map((symbol) => {
      delete symbol.filters;
      return symbol;
    });

    return data;
  } catch (error) {
    throw Error(error);
  }
}
