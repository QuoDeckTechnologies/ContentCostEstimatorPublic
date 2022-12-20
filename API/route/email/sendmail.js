const { Router } = require("express")
const { notifications } = require("../../config/emailSettings");
const nodemailer = require("nodemailer");

let emailTempate = {
    from: notifications.fromEmail,
    to: notifications.to,
    subject: notifications.contactform.subject,
    text: "",
    html: notifications.contactform.body,
};

async function sendEmail(req, res, next) {
    try {
        const user = req.body.user;
        if (user) {
            emailTempate.html = emailTempate.html.replace("{someone}", user.name)
            emailTempate.html = emailTempate.html.replace("{NameDescription}", user.name)
            emailTempate.html = emailTempate.html.replace("{EmailDescription}", user.email)
            emailTempate.html = emailTempate.html.replace("{PhoneDescription}", user.phoneNumber)
            emailTempate.html = emailTempate.html.replace("{OrganizationDescription}", user.organization)
            emailTempate.html = emailTempate.html.replace("{DesignationDescription}", user.designation)

            nodemailer.createTransport({
                host: notifications.emailTransporter.host,
                port: notifications.emailTransporter.port,
                secure: notifications.emailTransporter.secure,
                auth: {
                    user: notifications.emailTransporter.auth.user,
                    pass: notifications.emailTransporter.auth.pass,
                }
            })
                .sendMail(emailTempate, (err) => {
                    if (err) {
                        return console.log("Message Not sent", err);
                    }
                    else {
                        return console.log("Message sent");
                    }
                });
            res.status(200).send("Email Sent SuccessFully!!!");
        } else {
            res.status(404).send("User/User email not present !!");
        }
    } catch (error) {
        res.status(422).send("Email Send Failure", err)
    }
}

module.exports = Router({ mergeParams: true }).post(
    "/email/send",
    sendEmail
);
