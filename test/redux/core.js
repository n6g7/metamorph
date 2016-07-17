import {expect} from 'chai';
import {fromJS} from 'immutable';

import {
  addFile,
  removeFile,
  toggleAutoCompile
} from '../../src/redux/core';

describe('Core logic', () => {
  describe('addFile()', () => {
    it('adds a file to the end of the list', () => {
      const state = fromJS({
        files: [{
          source: '/a.styl',
          dest: '/a.css',
          type: 'Stylus'
        }]
      });
      const nextState = addFile(state, {
        source: '/b.pug',
        dest: '/b.html',
        type: 'Pug'
      });

      const files = nextState.get('files');
      expect(files.count()).to.equal(2);

      const file = files.get(1);
      expect(file).to.have.property('source', '/b.pug');
      expect(file).to.have.property('dest', '/b.html');
      expect(file).to.have.property('type', 'Pug');
    });
  });

  describe('removeFile()', () => {
    it('removes a file from the list', () => {
      const state = fromJS({
        files: [{
          source: '/a.styl',
          dest: '/a.css',
          type: 'Stylus',
          upToDate: false
        }]
      });
      const nextState = removeFile(state, '/a.styl');

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
