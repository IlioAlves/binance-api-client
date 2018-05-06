import rp from 'request-promise';
import console from 'better-console';
import 'colors';

export default async () => {
  try {
    const data = await rp({
      uri: 'https://api.binance.com/api/v1/exchangeInfo',
      json: true,
    });

    const symbols = data.symbols.map((symbol) => {
      delete symbol.filters;
      return symbol;
    });

    console.table(data.rateLimits);
    console.table(symbols);
  } catch (error) {
    console.error('Ops! We got an error:'.red, error.red);
  }
};
