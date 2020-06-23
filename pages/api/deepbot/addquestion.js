import mongoose from 'mongoose';
import QuestionModel from './models/question.js';

export default (req, res) => {
  if (req.method == "POST") {
    const question = req.body.text;
    const author = req.body.user_name;

    // ADD QUESTION TO DATABASE
    const newQuestion = new QuestionModel({
      question, author
    });
    newQuestion.save((err, newQuestion) => { if (err) throw err; });

    res.send({
      response_type: "in_channel",
      text: `New question added by ${author}! ${question}`
    });
  } else {
    res.send("POST endpoint only.")
  }
}
