import mail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

// Create an api key in sendgrid and store someplace safe
mail.setApiKey(process.env.SENDGRID_API_KEY || '')

type ResponseData = {
  status?: string
  message?: string
}

export async function POST(request: Request) {
  let response: ResponseData = {}
  const body = await request.json()
  console.log(body)
  const content = {
    to: 'leo14haider@gmail.com',
    from: 'usman.haider.developer@gmail.com',
    subject: `New Message From ${body.name} - Contact Form`,
    text: body.message,
    html: `<div>
    <div>Email: ${body.email}</div>
    <div>Message: ${body.message}
    </div>`,
  }

  // Send the data and create a response object. I'm using status and message to display a success or fail notification in the UI
  await mail
    .send(content)
    .then(() => {
      response = {
        status: 'success',
        message: "Your message was sent. I'll be in contact shortly.",
      }
    })
    .catch((error) => {
      response = {
        status: 'error',
        message: `Message failed to send with error, ${error}`,
      }
    })

  return NextResponse.json(response)
}
