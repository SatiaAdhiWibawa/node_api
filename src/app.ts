import express from 'express';
import fs from 'fs';
import authorization from './middleware/authorization';

const app = express();
const port = 3000;

// testing load middleware
app.use(authorization);

// Read the files in the './src/routes' directory
fs.readdirSync('./src/routes')
    .filter((file) => file.endsWith('.ts'))
    .forEach((file) => {
      const routeName = file.split('.')[0];
      const routePath = `./routes/${routeName}`;

      // Log that the route is loaded
      // eslint-disable-next-line no-undef
      console.log(`Route ${routeName} loaded`);

      // Mount the route
      app.use(`/${routeName === 'index' ? '' : routeName}`, require(routePath));
    });

app.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Example app listening on port ${port}`);
});
