 const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://shravya:rqK0tfgqftomdN6G@cluster0.nyir3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 const connection = mongoose.connection

 connection.on("connected", () => {
    console.log('DB is connected')
 })