import yargs from 'yargs';

yargs.command('time', 'Test connectivity to the Rest API and get the current server time.', () => {}, (argv) => {
  console.log('time');
}).argv;

yargs.command('exchangeInfo', 'Current exchange trading rules and symbol information', () => {}, (argv) => {
  console.log('exchangeInfo');
}).argv;

yargs.command('trades [symbol] [limit]', 'Get recent trades (up to last 500).', (yargs) => {
  yargs
    .positional('symbol', {
      describe: 'cryptocurrency symbol',
    })
    .positional('limit', {
      describe: 'trade limit (Default 500; max 500)',
      default: 500,
    });
}, (argv) => {
  console.log('trades', argv);
}).demandOption(['symbol']).argv;
