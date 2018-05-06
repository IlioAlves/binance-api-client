import 'babel-polyfill';
import { expect } from 'chai';
import nock from 'nock';
import { trades } from '../src/endpoints';

describe('Test symbol trades', () => {
  it('check result', async () => {
    nock('https://api.binance.com/api/v1')
      .get('/trades')
      .reply(200, [{}, {}]);

    const data = await trades('BNBBTC');
    expect(data.length).to.equal(2);
  });
});
