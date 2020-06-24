import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const questionCollection = req.db.collection("questions");

  questionCollection.find().toArray((questions) => {
    console.log(questions);
    if (questions) {
      const question = questions[0];

      console.log("questions", questions);
      console.log("question", question);

      res.send({
        response_type: "in_channel",
        text: `Question by ${question.author}: ${question.question}`
      });

      questionCollection.remove({ _id: question._id }, (err) => {
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
});

export default handler;
