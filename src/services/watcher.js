import Watchpack from 'watchpack';

import { staleFile } from '../redux/actions';
import store from '../redux/store';

const watcher = new Watchpack({
  aggregateTimeout: 1000
});

const files = [];

watcher.on('change', (filepath) => {
  store.dispatch(staleFile(filepath));
});

export function watch(file) {
  files.push(file);
  watcher.watch(files, []);
}
