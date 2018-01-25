import Differencify from 'differencify';
const differencify = new Differencify({ debug: true });

describe('Differencify', () => {
  beforeAll(async () => {
    await differencify
      .launchBrowser({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
  });
  afterAll(async () => {
    await differencify.cleanup();
  });
  it('simple', async () => {
    await differencify
      .init()
      .newPage()
      .setViewport({ width: 800, height: 600 })
      .goto('http://localhost:3000/')
      .waitFor(1000)
      .evaluate('(function () { const img = document.querySelector("img"); img.style["animation"] = "unset"; })();')
      .screenshot()
      .toMatchSnapshot()
      .close()
      .end();
  }, 10000);
});