import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const questionCollection = req.db.collection("questions");
  questionCollection.find((err, questions) => {
    if (err) throw err;

    const question = questions[0];

    if (question) {
      res.send({
        response_type: "in_channel",
        text: `Question by ${question.author}: ${question.question}`
      });
    } else {
      res.send({
        response_type: "in_channel",
        text: "No more questions in our database!"
      });
    }

    // DELETE QUESTION
    questionCollection.remove({ _id: question._id }, err => { if (err) throw err; })
  });
});

export default handler;
