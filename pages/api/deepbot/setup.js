import axios from 'axios';

export default (req, res) => {
  const client_id = process.env.DEEPBOT_CLIENT_ID;
  const client_secret = process.env.DEEPBOT_CLIENT_SECRET;

  if (req.query) {
    if (req.query.code) {
      axios.get(`https://slack.com/api/oauth.v2.access?client_id=${client_id}&client_secret=${client_secret}&code=${req.query.code}`).then((response) => {
        res.writeHead(301, {
          Location: '/bots/deepbot'
        });
        res.end();
        return;
      })
    }
  }

  res.send("There was an issue when visiting this page.");
}
