const mongoose = require("mongoose");

let mongoUrl = process.env.DEEPBOT_MONGO_URL || "mongodb://localhost:27017/deepbot";
console.log("mongoUrl", mongoUrl);
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '[-] Connection error'));

let questionSchema = new mongoose.Schema({
  question: String,
  author: String
});

const QuestionModel = mongoose.model("Question", questionSchema);

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
