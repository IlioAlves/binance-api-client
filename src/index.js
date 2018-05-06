// @flow
import 'babel-polyfill';
import yargs from 'yargs';
import console from 'better-console';
import 'colors';
import { time, exchangeInfo, trades } from './endpoints';

yargs
  .command(
    'time',
    'Test connectivity to the Rest API and get the current server time.',
    () => {},
    async () => {
      try {
        const data: {
          serverTime: number,
        } = await time();
        console.log(`The server unix time is ${data.serverTime}`);
      } catch (error) {
        console.error('Ops! We have an error: ', error.red);
      }
    },
  )
  .command(
    'exchangeInfo',
    'Current exchange trading rules and symbol information',
    () => {},
    async () => {
      try {
        const data: Array<{
          rateLimits: Array<any>,
          symbols: Array<any>,
        }> = await exchangeInfo();
        console.table(data.rateLimits);
        console.table(data.symbols);
      } catch (error) {
        console.error('Ops! We have an error: ', error.red);
      }
    },
  )
  .command(
    'trades [symbol] [limit]',
    'Get recent trades (up to last 500).',
    () => {},
    async (args) => {
      try {
        const data: Array<mixed> = await trades(args);
        console.table(data);
      } catch (error) {
        console.error('Ops! We have an error: ', error.red);
      }
    },
  ).argv;
