import express from "express";
import routes from "./config/router.js";
import cors from "cors";

const port = 3333;
const app = express();

const _haltOnTimedout = (err, req, res, next) => {
  if (!req.timedout) {
    next();
  } else {
    if (!res.headersSent) {
      res.status(503).send();
    } else {
      next(err);
    }
  }
  return;
};

app.use(cors());
app.use(routes);
app.use(_haltOnTimedout);
console.log("Routes loaded");

app.listen(port, () => {
  console.info(`Server is runnig on port ${port}`);
});
