import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
import SessionService from 'engine-testing/services/session';

const resolver = engineResolverFor('my-engine');

// eslint-disable-next-line prefer-arrow-callback
module('Unit | Route | create', function (hooks) {
  setupTest(hooks, {
    resolver
  });

  test('it should set the right template version', function (assert) {
    this.owner.register('service:session', SessionService);
    const route = this.owner.lookup('route:edit');
    assert.equal(route.get('userName'), 'Luke Skywalker');
  });
});

// import { module, test } from 'qunit';
// import { setupTest } from 'ember-qunit';
//
// // eslint-disable-next-line prefer-arrow-callback
// module('Unit | Route | edit', function (hooks) {
//   setupTest(hooks);
//
//   test('it should return user name from the session', function (assert) {
//     const route = this.owner.lookup('route:edit');
//     assert.equal(route.get('userName'), 'Luke Skywalker');
//   });
// });
