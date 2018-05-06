import 'babel-polyfill';
import { expect } from 'chai';
import nock from 'nock';
import { time } from '../src/endpoints';

describe('Test time', () => {
  it('check result', async () => {
    nock('https://api.binance.com/api/v1')
      .get('/time')
      .reply(200, {
        serverTime: 123,
      });

    const data = await time();
    expect(data.serverTime).to.equal(123);
  });
});
