require("dotenv").config();
const cors = require("cors");
const sendMail = require("../API/route/email/sendmail");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", sendMail);
const port = process.env.PORT || 8080
const start = async () => {
    try {
        await app.listen(port, () => {
            console.log("API Started")
        })
    }
    catch (err) {
        console.log("err", err)
    }
}
start()