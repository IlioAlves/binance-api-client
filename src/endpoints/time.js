import rp from 'request-promise';
import 'colors';

export default async () => {
  try {
    const data = await rp({
      uri: 'https://api.binance.com/api/v1/time',
      json: true,
    });
    console.log(`The server unix time is ${data.serverTime}`.green);
  } catch (error) {
    console.error('Ops! We got an error:'.red, error.red);
  }
};
