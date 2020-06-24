const mongoose = require("mongoose");

const mongoUrl = process.env.DEEPBOT_MONGO_URL || "mongodb://localhost:27017/botgang-deepbot";

// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log( 'Database Connected' ))
  .catch(err => console.log( err ));

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
    console.log("mongoUrl", mongoUrl);
    const newQuestion = new QuestionModel({
      question, author
    });
    newQuestion.save((err, newQuestion) => {
      if (err) throw err;
    });

    console.log("newQuestion", newQuestion);

    res.send({
      response_type: "in_channel",
      text: `New question added by ${author}! ${question}`
    });
  } else {
    res.send("POST endpoint only.")
  }
}
