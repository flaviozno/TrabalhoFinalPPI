import ErrorCode from "./ErrorCode.js";
import Exception from "./Exception.js";

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

export default NotFoundException;
