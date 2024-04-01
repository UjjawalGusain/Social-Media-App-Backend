import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express()

// We use app.use() when we are using middlewares. 
// Since cors is a middleware, we need to use it
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// This is to setup the middleware.
// express.json() is telling us that the data can come in json format
// You can pass options(it is a good practice) to express.json(Options)
// limit option tells us how much size of data can be processed before giving an error
app.use(express.json({
    limit: "16kb",
}))

// Once again to setup the middleware.
// exress.urlencoded() is telling us that the data can come in url format
// and can be encoded the way a url is. You can pass options here too.
// The extended options lets us parse nested url too
app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}))

// This essentially allowes the app to serve static files such as images, 
// pdf, documents etc that are inside the "public" directory. 
app.use(express.static("public"))

// This is also a middleware that facilitates CRUD operations
// (create, read, update, delete) on cookies so then we can programmatically 
// change them. This can only be done by the server and teh client is not 
// allowed to change them.
app.use(cookieParser())

export default app;