const express = require("express");
const router = require("./config/router.js");
const middlewares = require("./config/middleware.js");

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
app.use(middlewares())
app.use(router);
app.use(_haltOnTimedout);
console.info("Router loaded");

app.listen(port, function () {
  console.info("Server is running on port " + port);
});
