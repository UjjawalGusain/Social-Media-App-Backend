import dotenv from 'dotenv'
import connectDB from './db/index.js'
import app from './app.js'

dotenv.config({
    path: './env'
})


// Here, two errors are being handled
// The error in catch is the error that has been occured 
// during execution of connectDB function
// The error in app.on is the error in the express app itself

connectDB()
.then(() => {

    // app.on() attaches an event handler on express app.
    // This one handles the "error" event
    app.on("error", (error) => {
        console.log(`Error: ${error}`);
        throw error
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`App running on the Port: ${process.env.PORT}`);
    } )

})
.catch((error) => {
    console.log(`MONODB connected failed: ${error}`);
})
/*

// This is our first approach. The problem with this is
// that it makes index.js too polluted. So we would prefer
// a more modular approach. 


const app = express()

// Here we will use javascript iffy
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error(`ERROR: ${error}`)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log("App is listening on the PORT: ", process.env.PORT);
        })

    }catch(error){
        console.error(`ERROR: ${error}`);
        throw error
    }
})()

*/