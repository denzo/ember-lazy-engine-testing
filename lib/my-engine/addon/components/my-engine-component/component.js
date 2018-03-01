import Component from '@ember/component';
import layout from './template';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  session: inject(),

  userName: computed(function() {
    return this.get('session.user.name');
  })

});
