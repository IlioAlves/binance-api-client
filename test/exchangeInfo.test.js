import 'babel-polyfill';
import { expect } from 'chai';
import nock from 'nock';
import { exchangeInfo } from '../src/endpoints';

describe('Test exchangeInfo', () => {
  it('check result', async () => {
    nock('https://api.binance.com/api/v1')
      .get('/exchangeInfo')
      .reply(200, {
        rateLimits: [{}],
        symbols: [],
      });

    const data = await exchangeInfo();
    expect(data.rateLimits.length).to.equal(1);
    expect(data.symbols.length).to.equal(0);
  });
});
