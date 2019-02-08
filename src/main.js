import { foo, bar } from './shared';

// before (`bar` import is unused):
console.log(foo);
// after (`bar` import is used):
// console.log(foo, bar);

import('./other-chunk');