export function SendCode(email, number){

    const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: email, 
        from: 'testsandino@gmail.com', 
        subject: 'Your Key to validate your account', 
        text: number,
        html: '<strong>Thank you</strong>'
    }

    sgMail.send(msg)
}