import {expect} from 'chai';

import {
  types,
  addFile,
  compileFile,
  removeFile,
  toggleAutoCompile
} from '../../src/redux/actions';
import {Jade} from '../../src/services/languages';

describe('Action creators', () => {
  describe('addFile()', () => {
    let action;

    beforeEach(() => {
      action = addFile('/yoyoyo.pug');
    });

    it('generates an action with the correct type', () => {
      expect(action).to.have.property('type', types.ADD_FILE);
    });

    it('generates an action with source and destination info', () => {
      expect(action).to.have.deep.property('file.source', '/yoyoyo.pug');
      expect(action).to.have.deep.property('file.dest', '/yoyoyo.html');
      expect(action).to.have.deep.property('file.upToDate', false);
    });

    it('detects the file type', () => {
      expect(action).to.have.deep.property('file.type', Jade.name);
    });
  });

  describe('compileFile()', () => {
    let action;

    beforeEach(() => {
      action = compileFile('/yoyoyo.pug');
    });

    it('generates an action with the correct type', () => {
      expect(action).to.have.property('type', types.COMPILE_FILE);
    });

    it('generates an action with the file path', () => {
      expect(action).to.have.property('file', '/yoyoyo.pug');
    });
  });

  describe('removeFile()', () => {
    let action;

    beforeEach(() => {
      action = removeFile('/yoyoyo.pug');
    });

    it('generates an action with the correct type', () => {
      expect(action).to.have.property('type', types.REMOVE_FILE);
    });

    it('generates an action with the file path', () => {
      expect(action).to.have.property('file', '/yoyoyo.pug');
    });
  });

  describe('toggleAutoCompile()', () => {
    it('generates an action with the correct type', () => {
      const action = toggleAutoCompile();
      expect(action).to.have.property('type', types.TOGGLE_AUTO_COMPILE);
    });
  });
});
