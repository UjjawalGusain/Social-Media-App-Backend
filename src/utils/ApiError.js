// We have created an ApiError class that extends from
// nodejs inbuilt Error class.
// This is done to provide a consistent ApiError handling 
// class to keep the code clean and convenient

class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = ""){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.errors = errors;
        this.success = false;

        if(stack){
            this.stack = stack;
        } else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}