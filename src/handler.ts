import { APIGatewayProxyEvent } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent) => {
  let rawBody = '';

  if (event.isBase64Encoded) {
    const buff = Buffer.from(event.body || '', 'base64');
    rawBody = buff.toString('utf-8');
  } else {
    rawBody = event.body || '';
  }

  console.log('Decoded body:', rawBody);

  const params = new URLSearchParams(rawBody);
  const incomingMessage = params.get('Body')?.toLowerCase().trim() || '';

  let responseMessage = '';

  console.log('Decoded message:', incomingMessage);
  switch (incomingMessage) {
    case 'hello':
      responseMessage = 'Hello! How can I assist you today?';
      break;
    case 'help':
      responseMessage = 'Here are some commands you can use: hello, help, bye.';
      break;
    case 'bye':
      responseMessage = 'Goodbye! Have a great day!';
      break;
    default:
      responseMessage = 'I am not sure how to respond to that. Try saying "help" for assistance.';
      break;
  }

  const twilioResponse = `
<Response>
    <Message>${responseMessage}</Message>
</Response>
  `;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/xml",
    },
    body: twilioResponse.trim(),
  };
}   
 