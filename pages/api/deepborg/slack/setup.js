import axios from 'axios';

export default (req, res) => {
  const client_id = process.env.DEEPBORG_CLIENT_ID;
  const client_secret = process.env.DEEPBORG_CLIENT_SECRET; 

  if (req.query) {
    if (req.query.code) {
      axios.get(`https://slack.com/api/oauth.v2.access?client_id=${client_id}&client_secret=${client_secret}&code=${req.query.code}`).then((response) => {
        res.writeHead(301, {
          Location: '/bots/deepborg'
        });
        res.end();
      })
    }
  }
}
