import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const text = req.body.text.split(/\s+/);
  const author = req.body.user_name;

  const link = text.pop();
  const alias = text.join(" ");


  await req.db.collection("hyperlinky-links").save({
    alias, link
  });

  res.send({
    response_type: "in_channel",
    text: `Created link "${alias}" with value ${link}!`
  });
});

export default handler;
