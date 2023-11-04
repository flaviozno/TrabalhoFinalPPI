const ErrorCode = require("./ErrorCode.js");
const Exception = require("./Exception.js");

class NotFoundException extends Exception {
  constructor(serviceName, objectName) {
    super(ErrorCode.NOT_FOUND);

    if (objectName) {
      this.message = `${objectName} não encontrado(a).`;
    }

    this.objectName = objectName;
    this.service = serviceName;
  }
}

module.exports = NotFoundException;
