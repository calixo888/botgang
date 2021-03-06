import Head from 'next/head'
import Layout from '../../components/layouts/Layout';
import Bot from '../../components/Bot';

export default (req, res) => {
  const client_id = process.env.DEEPBORG_CLIENT_ID;
  const oAuthLink = `https://slack.com/oauth/v2/authorize?client_id=${client_id}&scope=commands&user_scope=`

  const data = { name: "Deepborg", description: "Let's think deeper.", image: "/img/bots/deepborg.png", path: "/bots/deepborg", tags: ["slack"] };

  return (
    <Layout>
      <Head>
        <title>Bot Gang - Deepborg</title>
        <meta name="description" content="Check out Deepborg, a bot that asks, saves, and receives deep questions that anyone can answer!" />
        <meta name="keywords" content="Slack, Discord, Bot, Bot Gang, Deep" />
      </Head>
      <div className="split-grid">
        <div>
          <Bot data={data} />

          <p className="mt-3">
            What is life? What gives life meaning? Why are Doritos so freaking good? It's too much to try to answer these questions alone, but instead use Deepborg to let others help you answer these immensely deep questions.
          </p>

          <div className="text-right">
            <a href={oAuthLink}><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
          </div>
        </div>

        <div>
          <h3>Why Deepborg</h3>
          <p>
            We need to think deeper. Humans are shallow. Deepborg helps us shallow humans to think deeper by asking us questions that only the deepest of the deepest humans from the deep can answer.
          </p>

          <h3>Who uses Deepborg</h3>
          <p>
            The members of CVT use Deepborg, those poor souls...
          </p>

          <h3>Commands</h3>
          <ul>
            <li>
              <code>/addquestion [question]</code> - Adds a deep question to our database that anyone can be asked
            </li>
            <li>
              <code>/deepquestion</code> - Returns a deep question from our database for everyone to answer
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
