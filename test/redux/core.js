import {expect} from 'chai';
import {fromJS} from 'immutable';

import {
  addFile,
  compileFile,
  removeFile,
  toggleAutoCompile
} from '../../src/redux/core';

describe('Core logic', () => {
  const state = fromJS({
    autoCompile: false,
    files: [{
      source: '/a.styl',
      dest: '/a.css',
      type: 'Stylus',
      upToDate: false
    }]
  });
  const demoFile = state.getIn(['files', 0]);

  describe('addFile()', () => {
    it('adds a file to the end of the list', () => {
      const nextState = addFile(state, {
        source: '/b.pug',
        dest: '/b.html',
        type: 'Pug',
        upToDate: false
      });

      const files = nextState.get('files');
      expect(files.count()).to.equal(2);

      const file = files.get(1);
      expect(file).to.have.property('source', '/b.pug');
      expect(file).to.have.property('dest', '/b.html');
      expect(file).to.have.property('type', 'Pug');
      expect(file).to.have.property('upToDate', false);
    });
  });

  describe('compileFile()', () => {
    it('updates the state of the file', () => {
      const nextState = compileFile(state, demoFile);

      const file = nextState.getIn(['files', 0]);
      expect(file).to.have.property('upToDate', true);
    });
  });

  describe('removeFile()', () => {
    it('removes a file from the list', () => {
      const nextState = removeFile(state, demoFile);

      const files = nextState.get('files');
      expect(files.count()).to.equal(0);
    });
  });

  describe('toggleAutoCompile()', () => {
    it('turns auto-compile on', () => {
      const state = fromJS({
        autoCompile: false
      });
      const nextState = toggleAutoCompile(state);

      const autoCompile = nextState.get('autoCompile');
      expect(autoCompile).to.equal(true);
    });

    it('turns auto-compile on', () => {
      const state = fromJS({
        autoCompile: true
      });
      const nextState = toggleAutoCompile(state);

      const autoCompile = nextState.get('autoCompile');
      expect(autoCompile).to.equal(false);
    });
  });
});
