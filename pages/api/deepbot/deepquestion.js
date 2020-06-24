import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const question = await req.db.collection("questions").findOne();

  if (question) {
    res.send({
      response_type: "in_channel",
      text: `Question by ${question.author}: ${question.question}`
    });

    req.db.collection("questions").remove({ _id: question._id }, (err) => {
      if (err) throw err;
      console.log("delete");
    });
  } else {
    res.send({
      response_type: "in_channel",
      text: "No more questions in our database!"
    });
  }
});

export default handler;
