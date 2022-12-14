import sgMail from '@sendgrid/mail'

export const sendEmail = async (data: {
  name: string
  email: string
  company: string
  message: string
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  const { name, email, company, message } = data

  const emailToFrom = {
    to: "malika.nallaperuma@gmail.com",
    from: "hey@islandcommerce.co",
  }

  const content = {
    to: emailToFrom.to,
    from: emailToFrom.from,
    replyTo: email,
    subject: `New Message From: ${name}`,
    text: message,
    html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          <strong>Message</strong>: ${message}
          </p>`,
  }

  const replyTo = {
    to: email,
    from: emailToFrom.from,
    templateId: 'd-1820d2871f1642d78bf47ae1df51b7c7',

    dynamic_template_data: {
      subject: 'Thank you for contacting us',
      name: name,
    },
  };

  try {
    if (company) throw new Error('Bot detected, company name not allowed.')
    await sgMail.send(content)

    await sgMail.send(replyTo)
  } catch (error: unknown) {
    throw new Error(error as unknown as string)
  }
}
