import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Route.extend({

  session: inject(),

  userName: computed(function() {
    return this.get('session.user.name');
  })

});
