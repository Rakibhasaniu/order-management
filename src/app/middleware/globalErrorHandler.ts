/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   console.log(err.statusCode);
  //setting default values
  let statusCode = 500;
  let message = 'Something went wrong!';
  
  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message:err.message,
    error:err
  });
};

export default globalErrorHandler;

//pattern
/*
success
message
errorSources:[
  path:'',
  message:''
]
stack
*/
