const mongoose = require("mongoose");

const mongoUrl = process.env.MONGODB_URL + "/deepbot" || "mongodb://localhost:27017/deepbot";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, '[-] Connection error'));
const questionSchema = new mongoose.Schema({
  question: String,
  author: String
});
const QuestionModel = mongoose.model("Question", questionSchema);

export default QuestionModel
