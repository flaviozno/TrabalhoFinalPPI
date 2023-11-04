class Exception extends Error {
  constructor(error) {
    super(error.message);
    this.code = error.code;
    this.status = error.status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

module.exports = Exception;
