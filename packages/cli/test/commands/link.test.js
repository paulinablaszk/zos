'use strict'
require('../setup')

import { stubCommands, itShouldParse } from './share';

contract('link command', function() {

  stubCommands()

  itShouldParse('should call link script with a list of dependencies and no install', 'link', 'zos link mock-stdlib@1.1.0 mock-stdlib2@1.2.0 --no-install --no-interactive', function(link) {
    const dependencies = ['mock-stdlib@1.1.0', 'mock-stdlib2@1.2.0']
    link.should.have.been.calledWithExactly({ dependencies, installDependencies: false })
  })

  itShouldParse('should call push script when passing --push option', 'push', 'zos link mock-stdlib@1.1.0 mock-stdlib2@1.2.0 --push test --no-interactive', function(push) {
    push.should.have.been.calledWithExactly({ deployDependencies: undefined, force: undefined, reupload: undefined, network: 'test', txParams: {} })
  })

})
