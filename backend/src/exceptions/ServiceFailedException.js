const ErrorCode = require('./ErrorCode.js');
const Exception = require('./Exception.js');

module.exports = class ServiceFailedException extends Exception {
  constructor(serviceName, error) {
    console.error(error);
    super(ErrorCode.SERVICE_FAILED);
    this.service = serviceName;
    this.__error = error;
  }
};
