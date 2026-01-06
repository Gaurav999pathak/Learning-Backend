//require('dotenv').config({path:'./env'}) :- completely working but ill use import for consistancy
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB();
then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running ${process.env.PORT}`);
  });
}).catch((error) => {
  console.log("mongodb connection failed", error);
});

/* Approch 1 :- this is the approach where all in main file which is not good like 
we are using react we cannot put everything in app.js or main.js so well go to the 
second approch where another file only here to connect the file.
import express from "express"
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error)=>{
     console.log("ERROR :", error)
     throw error
    })

    app.listen(process.env.PORT,()=>{
     console.log(`app is listning on port ${process.env.PORT}`)
    })

  } catch (error) {
    console.log("Error:", error);
    throw error
  }
})();
*/
