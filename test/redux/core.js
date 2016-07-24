import {expect} from 'chai';
import {fromJS} from 'immutable';

import {
  addFile,
  removeFile,
  toggleAutoCompile,
  compileFile,
  compileAll,
  staleFile
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

    it('turns auto-compile off', () => {
      const state = fromJS({
        autoCompile: true
      });
      const nextState = toggleAutoCompile(state);

      const autoCompile = nextState.get('autoCompile');
      expect(autoCompile).to.equal(false);
    });
  });

  describe('compileFile()', () => {
    it('updates the state of the file', () => {
      const nextState = compileFile(state, demoFile);

      const file = nextState.getIn(['files', 0]);
      expect(file).to.have.property('upToDate', true);
    });
  });

  describe('compileAll()', () => {
    it('updates the state of all files', () => {
      const state = fromJS({
        autoCompile: false,
        files: [
          {
            source: '/a.styl',
            dest: '/a.css',
            type: 'Stylus',
            upToDate: false
          },
          {
            source: '/b.styl',
            dest: '/b.css',
            type: 'Stylus',
            upToDate: false
          }
        ]
      });
      const nextState = compileAll(state);

      nextState.get('files').forEach(file => {
        expect(file).to.have.property('upToDate', true);
      });
    });
  });

  describe('staleFile()', () => {
    it('updates the state of the file (false)', () => {
      const state = fromJS({
        autoCompile: false,
        files: [{
          source: '/a.styl',
          dest: '/a.css',
          type: 'Stylus',
          upToDate: true
        }]
      });
      const nextState = staleFile(state, '/a.styl', false);

      const file = nextState.getIn(['files', 0]);
      expect(file).to.have.property('upToDate', false);
    });

    it('updates the state of the file (true)', () => {
      const state = fromJS({
        autoCompile: false,
        files: [{
          source: '/a.styl',
          dest: '/a.css',
          type: 'Stylus',
          upToDate: false
        }]
      });
      const nextState = staleFile(state, '/a.styl', true);

      const file = nextState.getIn(['files', 0]);
      expect(file).to.have.property('upToDate', true);
    });
  });
});
