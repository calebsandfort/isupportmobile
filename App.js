// @flow
import boot from "./src/boot/index";

if (process.env.NODE_ENV !== 'production') {
  require('react-devtools');
}

const app = boot();

export default app;
