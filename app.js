import {web} from "./src/application/web.js";
// import {logger} from "./src/application/logging.js";

const port = process.env.PORT || 3000;

web.listen(port, () => {
    console.log(`app start on port: ${port}`);
    // logger.info(`app start on port: ${port}`);
});