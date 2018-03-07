// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
//
// // eslint-disable-next-line prefer-arrow-callback
// module('Integration | Component | my engine component', function (hooks) {
//   setupRenderingTest(hooks);
//
//   test('it should render the right values', async function (assert) {
//     await render(hbs`{{my-engine-component}}`);
//     assert.equal(this.element.innerText.trim(), 'Luke Skywalker', 'The component value is rendered from the service.');
//   });
// });

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
import Service from '@ember/service';

const resolver = engineResolverFor('my-engine');

// eslint-disable-next-line prefer-arrow-callback
module('Integration | Component | my engine component', function (hooks) {
  setupRenderingTest(hooks, {
    resolver
  });

  test('it should set the right template version', async function (assert) {
    this.owner.register('service:session', Service.extend({
      // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
      user: {
        name: 'Sergio'
      }
    }));
    await render(hbs`{{my-engine-component}}`);
    assert.equal(this.element.innerText.trim(), 'Sergio', 'Ola Sergio');
  });
});
