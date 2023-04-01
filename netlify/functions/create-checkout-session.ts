import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";


const stripe = require('stripe')(process.env.SECRET_KEY);


const handler: Handler = async(event: HandlerEvent, context: HandlerContext) => {
    const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: process.env.PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://checkout-app-demo.netlify.app/success`,
    cancel_url: `https://checkout-app-demo.netlify.app/`,
  });

  return {
    statusCode: 303,
    headers: {
        'Location': session.url
    }
  }
}



export {handler};