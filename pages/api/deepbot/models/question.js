const mongoose = require("mongoose");

let mongoUrl = process.env.MONGODB_URL || "mongodb://localhost:27017";
mongoUrl = mongoUrl + "/deepbot";
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

export default mongoose.model("Question", questionSchema);
