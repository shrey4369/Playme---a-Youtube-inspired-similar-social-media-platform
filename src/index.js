// require('dotenv').config({path:'./env})
// console.log(process.env)
import connectDB from "./db/index.js"
import dotenv from 'dotenv'

// Approach 2

dotenv.config({
    path: './env'
})

connectDB()



// Approach 1
/*
import mongoose from "mongoose"
import express from 'express'
import { DB_NAME } from './constants'

const app = express()

    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on((error) => {
                console.log("ERROR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening at port ${process.env.PORT}`);
            })

        } catch (error) {
            console.log("ERROR: ", error);
            throw error
        }
    })() //IIFE: Immediately invoked function expressions

*/