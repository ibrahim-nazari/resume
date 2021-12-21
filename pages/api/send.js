import nodemailer from "nodemailer";
const sendEmail = async (req, res) => {
  if (req.method == "POST") {
    const { lastName, name, phone, email, message } = req.body;
    console.log(req.body);

    try {
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP,
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: true,
        },
      });

      let out = `<div><strong>First Names:  ${name} ${lastName}</strong></div><br/><div><strong>Phone :  ${phone}</strong></div><br/><div style="margin-top:'12px',margin-bottom:'12px'"><strong>Email:  ${email}</strong></div><hr/><div>${message}</div>`;

      await transporter.sendMail({
        from: process.env.FROMEMAIL,
        to: "nazaricode@gmail.com",
        subject: `${name} ${lastName}`,
        text: "",
        html: out,
      });

      return res.status(200).json({ message: "success", error: false });
    } catch (error) {
      return res.status(500).json({ message: error.message, error: true });
    }
  }
  return res.status(500).json({ message: "not allowed" });
};

export default sendEmail;
