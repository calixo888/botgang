const mongoose = require("mongoose");

let mongoUrl = process.env.DEEPBOT_MONGO_URL || "mongodb://localhost:27017/deepbot";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

let questionSchema = new mongoose.Schema({
  question: String,
  author: String
});

let QuestionModel;
try {
  QuestionModel = mongoose.model("Question");
} catch {
  QuestionModel = mongoose.model("Question", questionSchema);
}

export default (req, res) => {
  if (req.method == "POST") {
    const question = req.body.text;
    const author = req.body.user_name;

    // ADD QUESTION TO DATABASE
    const newQuestion = new QuestionModel({
      question, author
    });
    newQuestion.save((err, newQuestion) => {
      if (err) {
        console.log("err");
        throw err;
      }
      console.log("newQuestion", newQuestion);
      console.log("mongoUrl", mongoUrl);
    });

    res.send({
      response_type: "in_channel",
      text: `New question added by ${author}! ${question}`
    });
  } else {
    res.send("POST endpoint only.")
  }
}
