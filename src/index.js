// @flow
import 'babel-polyfill';
import yargs from 'yargs';
import { time, exchangeInfo, trades } from './endpoints';

yargs
  .command(
    'time',
    'Test connectivity to the Rest API and get the current server time.',
    () => {},
    time,
  )
  .command(
    'exchangeInfo',
    'Current exchange trading rules and symbol information',
    () => {},
    exchangeInfo,
  )
  .command(
    'trades [symbol] [limit]',
    'Get recent trades (up to last 500).',
    (yargs) => {
      yargs
        .positional('symbol', {
          describe: 'cryptocurrency symbol',
        })
        .positional('limit', {
          describe: 'trade limit (Default 500; max 500)',
          default: 500,
        });
    },
    trades,
  ).argv;
