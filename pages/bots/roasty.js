import Head from 'next/head'
import Layout from '../../components/layouts/Layout';
import Bot from '../../components/Bot';

export default (req, res) => {
  const client_id = process.env.ROASTY_CLIENT_ID;
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
          <h3>Why use Roasty?</h3>
          <p>
            Sometimes we're a bit too egotistic, and feel like we're on top of the world. And that's where Roasty comes in. Like my friend Kevin Wang says, "Sometimes you need someone to tell you're a piece of trash." You can thank us later 😉
          </p>

          <h3>How does it work?</h3>
          <p>
            We use the amazing help of the <a href="https://insult.mattbas.org/" target="_blank">Insult API</a> by Matt Bas to endlessly roast whoever so decides to use Roasty.
          </p>

          <h3>Commands</h3>
          <ul>
            <li>
              <code>/roast [person]</code> - Roasts someone specifically in plural tense
            </li>
            <li>
              <code>/roastme</code> - Feeling great? Not anymore :)
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
