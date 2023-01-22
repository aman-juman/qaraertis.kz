import {suspense} from "next/dist/shared/lib/dynamic-no-ssr";

export default async function (req, res){
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.mail.ru",
        auth: {
            user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
            pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
        },
        secure: true,
    });

    await new Promise((resolve, reject) =>{
        transporter.verify(function(error, success){
            if(error){
                console.log(error);
            } else{
                console.log("Server is ready to take our messages");
                resolve(suspense)
            }
        })
    })


    const mailData = {
        from: process.env.NEXT_PUBLIC_MAIL_USERNAME,
        to: process.env.NEXT_PUBLIC_MAIL_SEND_TO_USERNAME,
        subject: `Вы получили заявку на звонок с qaraertis.kz`,
        text: "Заявка на звонок",
        html: `<img style="width: 100px; height: 100px" src="https://yt3.ggpht.com/ytc/AMLnZu9RPbuig4zeCn6nWDSCQlnLhtq6NtdPIDf1bzXa=s900-c-k-c0x00ffffff-no-rj"/><div>Имя: ${req.body.name}</div><p>Телефон:
<a href="tel:${req.body.phone}">${req.body.phone}</a>
    `
    }

    await new Promise((resolve, reject) =>{
        transporter.sendMail(mailData, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
            res.status(200).json({
                message: "Mail sent successfully"})
        })
    })

    res.status(200).json({
        message: "Mail sent successfully"})
}