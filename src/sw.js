// eslint-disable-next-line import/no-extraneous-dependencies
import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();
setupPrecaching(getFiles());
