const axios = require("axios");
import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const response = await axios.get("https://complimentr.com/api");
  const compliment = response.data.compliment;

  res.send({
    response_type: "in_channel",
    text: `${compliment.charAt(0).toUpperCase() + compliment.slice(1)} :heart:`
  });
});

export default handler;
