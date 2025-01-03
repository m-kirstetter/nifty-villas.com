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
    url: "https://api.eu.mailgun.net",
  });

  const data = {
    from: "Nifty Villas Website <mailgun@mail.nifty-villas.com>",
    to: ["manu@actichains.com"],
    subject: "Contact from nifty-villas.com!",
    text: `Hey Team! We've got a contact message from nifty-villas.com.`,
  };

  try {
    const response = await mg.messages.create("mail.nifty-villas.com", data);

    return {
      success: true,
      message: "Email sent successfully!",
      emailResponse: { id: response.id, message: response.message },
    };
  } catch (error) {
    console.error("Mailgun error:", error);

    if (error instanceof Error) {
      return {
        success: false,
        message: "Failed to send email.",
        error: { message: error.message },
      };
    } else {
      return {
        success: false,
        message: "Failed to send email.",
        error: { message: "An unknown error occurred" },
      };
    }
  }
});
