class response{
    constructor(data = null, errors = null) {
      this.error = errors;
      this.data = data;
    }
    success(res) {
      return res.status(200).json({
        status: "Success",
        data: this.data,
      });
    }
    created(res) {
      return res.status(302).json({
        status: "Created",
        data: this.data,
      });
    }
    error500(res) {
      return res.status(500).json({
        status: "Error",
        errors: this.error,
      });
    }
    error400(res) {
      return res.status(400).json({
        status: "error",
        errors: this.error,
      });
    }
    notFount(res) {
      return res.status(404).json({
        status: "Not Fount",
        data:""
      });
    }
  }
  module.exports=response;