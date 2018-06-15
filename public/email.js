var nodemailer = require('nodemailer');

module.exports = {

    send: function(){
        console.log("email send intro");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'test.email.sender9@gmail.com',
                pass: '@Password1'
            }
        });

        var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'danny9512@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'

        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}