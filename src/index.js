import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './env'
})

connectDB()

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