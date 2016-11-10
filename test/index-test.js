import expect from 'expect';
import nightwatch from 'nightwatch';


describe('Visiting /pets/:id', function() {
  let client = nightwatch.initClient({silent: true});
  let browser = client.api();

  it('displays info about one pet', function(done) {
    browser
      .url('/pets/1')
      .waitForElementVisible('h2', 1000)
      .assert.containsText('')

    done();
  })
})
