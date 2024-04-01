// The class ApiResponse is intended to represent the 
// response that an API endpoint returns to the client

class ApiResponse{
    constructor(statusCode, data, message = "success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }
}

export {ApiResponse}