import formData from "form-data";
import Mailgun from "mailgun.js";

export default defineEventHandler(async (event) => {
  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    return;
  }

  const body = await readBody(event);

  console.log({ body });

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const data = {
    from: "Manuel Kirstetter <mailgun@nifty-villas.com>",
    to: ["manu@actichains.com"],
    subject: "Contact from nifty-villas.com!",
    text: `Hey Team! We've got a contact message from nifty-villas.com.`,
  };

  mg.messages
    .create("sandbox-123.mailgun.org", {
      from: "Excited User <mailgun@nifty-villas.com>",
      to: ["test@example.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomeness!",
      html: "<h1>Testing some Mailgun awesomeness!</h1>",
    })
    .then((msg) => console.log({ msg })) // logs response data
    .catch((err) => console.log({ err }));

  // await mg.messages
  //   .create(process.env.MAILGUN_DOMAIN, data)
  //   .then((msg) => console.log({ msg })) // logs response data
  //   .catch((err) => console.log({ err }));
});
