import 'promise-polyfill/lib/polyfill';
import 'unfetch/polyfill/index';

import { polyfill as objectAssignPolyfill } from 'es6-object-assign';
import './polyfill-globalThis';

objectAssignPolyfill();
