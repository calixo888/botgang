import Head from 'next/head'
import Layout from '../../components/layouts/Layout';
import Bot from '../../components/Bot';

export default (req, res) => {
  const client_id = process.env.BOTLIMENTOR_CLIENT_ID;
  const oAuthLink = `https://slack.com/oauth/v2/authorize?client_id=${client_id}&scope=commands&user_scope=`

  const data = { name: "HyperLinky", description: "Organizing links one workspace at a time.", image: "/img/bots/hyperlinky.png", path: "/bots/hyperlinky", tags: ["slack"] };

  return (
    <Layout>
      <Head>
        <title>Bot Gang - HyperLinky</title>
        <meta name="description" content="Check out HyperLinky, a bot that will help you save and organization all your links into nicely formatted aliases that are easy to retrieve!" />
        <meta name="keywords" content="Slack, Discord, Bot, Slack API, Links" />
      </Head>
      <div className="split-grid">
        <div>
          <Bot data={data} />

          <p className="mt-3">
            Ever feeling down or insecure about anything? Allow Botlimentor to encourage and compliment you, even in the weirdest, uncomfortable, and most unorthodox ways. It may seem weird at first but don't worry, you'll get used to it 😉
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
