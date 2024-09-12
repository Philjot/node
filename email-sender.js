const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sensecimeter@gmail.com', 
    pass: 'kaboshomoh' 
  }
});

let mailOptions = {
  from: 'philemonpoku@gmail.com',
  to: 'philemon_opoku@yahoo.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
