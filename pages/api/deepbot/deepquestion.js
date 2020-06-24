import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const questionCollection = req.db.collection("questions");

  const questions = await questionCollection.find();
  const question = questions[0];

  console.log("questions", questions);
  console.log("question", question);

  const text = question ? `Question by ${question.author}: ${question.question}` : "No more questions in our database!";
  console.log("text", text);

  res.send({
    response_type: "in_channel",
    text
  });

  questionCollection.remove({ _id: question._id }, (err) => {
    if (err) throw err;
    console.log("delete");
  });
});

export default handler;
