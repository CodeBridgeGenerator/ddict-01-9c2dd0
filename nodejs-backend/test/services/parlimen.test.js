const assert = require('assert');
const app = require('../../src/app');

describe('\'parlimen\' service', () => {
  it('registered the service', () => {
    const service = app.service('parlimen');

    assert.ok(service, 'Registered the service (parlimen)');
  });
});
