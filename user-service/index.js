const express = require('express')
const app = express()
const routes = require('./routes/routes')
const { default: mongoose } = require('mongoose')
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv')

//config for env file
dotenv.config();
const mongoUrl = process.env.URL

mongoose.connect(mongoUrl)
.then(() => console.log("Database connected"))
.catch((err) => console.log("connection errror"+err))
 
//Initialize middelware
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Server running...")
})

// Endpoint to get users
app.use('/api', routes);



process.on("uncaughtException",(err) => {
    console.log("exception error",err.message)
    console.log("Stack Trace:", err.stack);
   
})

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection at:', promise);
    console.error('Reason:', reason);
   });
  

//Listening server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
