// require dependencies
const cron = require('node-cron')
const express = require('express')
const log = console.log
// initialize express and port number
const app = express()
const port = 3000

// setup cron job everyday at 5:00AM
// cron.schedule("0 5 * * *", () => {
//     log("logs every minute")
// })

// setup cron job every minute
cron.schedule("* * * * *", () => {
    log("logs every minute")
})
// configure routes
app.get("/", (req, res) => {
    res.send("index route")
})
// start the server
app.listen(port, () => log(`Server: PORT ${port} active`))