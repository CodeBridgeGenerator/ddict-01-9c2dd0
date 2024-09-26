const assert = require('assert');
const app = require('../../src/app');

describe('\'maklumatDaerah\' service', () => {
  it('registered the service', () => {
    const service = app.service('maklumatDaerah');

    assert.ok(service, 'Registered the service (maklumatDaerah)');
  });
});
