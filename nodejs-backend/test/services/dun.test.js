const assert = require('assert');
const app = require('../../src/app');

describe('\'dun\' service', () => {
  it('registered the service', () => {
    const service = app.service('dun');

    assert.ok(service, 'Registered the service (dun)');
  });
});
