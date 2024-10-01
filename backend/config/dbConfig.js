 const mongoose = require("mongoose")

 mongoose.connect(process.env.DB_String)
 const connection = mongoose.connection

 connection.on("connected", () => {
    console.log('DB is connected')
 })