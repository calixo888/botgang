import Head from 'next/head'
import Layout from '../../components/layouts/Layout';
import Bot from '../../components/Bot';

export default (req, res) => {
  const client_id = process.env.ROASTY_CLIENT_ID;
  console.log(client_id);
  const oAuthLink = `https://slack.com/oauth/v2/authorize?client_id=${client_id}&scope=commands&user_scope=`;

  const data = { name: "Roasty", description: "Self-esteem? What's that?", image: "/img/bots/roasty.png", path: "/bots/roasty", tags: ["slack"] };

  return (
    <Layout>
      <Head>
        <title>Bot Gang - Roasty</title>
        <meta name="description" content="Check out Roasty, a bot that will literally roast you so hard that you won't want to respond and delete it right away!" />
        <meta name="keywords" content="Slack, Discord, Bot, Bot Gang, Roast, Insult" />
      </Head>
      <div className="split-grid">
        <div>
          <Bot data={data} />

          <p className="mt-3">
            Feeling on top of the world? Let Roasty bring you back down to earth. Feeling bad about yourself? Let Roasty confirm that assumption and make your life feel absolutely terrible, worthless, and meaningless ❤️️
          </p>

          <div className="text-right">
            <a href={oAuthLink}><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
          </div>
        </div>

        <div>
          <h2>Why I built this bot.</h2>
          <p>
            I have no freaking idea i know it's stupid
          </p>

          <h2>Future plans?</h2>
        </div>
      </div>
    </Layout>
  )
}
