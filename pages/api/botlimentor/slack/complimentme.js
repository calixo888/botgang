const axios = require("axios");
import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const response = await axios.get("https://complimentr.com/api");

  res.send({
    response_type: "in_channel",
    text: response.compliment
  });
});

export default handler;
