class ApiError extends Error {
  constructor(
    statuscode,
    message = "something went wrong",
    Errors = [],
    stack = ""
  ) {
    super(statuscode);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.Errors = Errors;
  }
}
export default ApiError;
