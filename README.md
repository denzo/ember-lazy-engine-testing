## Integration test for a component in a lazy engine.

I could only find one way to include the engine code in the testing. It involves adding the script tags manually in the `tests/index.html`

```
<script src="{{rootURL}}engines-dist/my-engine/assets/engine.js"></script>
<script src="{{rootURL}}engines-dist/my-engine/assets/engine-vendor.js"></script>
```

Lazy engines documentation describes the `app` folder in [the following way](https://github.com/ember-engines/ember-engines#app):
```
Assets in this folder don't make sense and will be ignored as they break the isolation guarantees of engines.
```

The above makes sense but I was unable to lazy load an engine without adding the `<script>` tags manually. 


Another interesting fact is that if you do use the engine's custom resolver like this `setupTest/setupRenderingTest(hooks, { customEngineResolver });`


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd engine-testing`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
