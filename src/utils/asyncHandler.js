// The use of asyncHandler is as a wrapper function to all our middleware calls.



// async handler using async/await
// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }

// asyncHandler using Promises
const asyncHandler = (func) => {
    (req, res, next) => {
        Promise.resolve(func(req, res, next))
        .catch((error) => next(error))
    }
}

export {asyncHandler}