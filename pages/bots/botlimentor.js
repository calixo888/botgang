import Head from 'next/head'
import Layout from '../../components/layouts/Layout';
import Bot from '../../components/Bot';

export default (req, res) => {
  const client_id = process.env.BOTLIMENTOR_CLIENT_ID;
  const oAuthLink = `https://slack.com/oauth/v2/authorize?client_id=${client_id}&scope=commands&user_scope=`

  const data = { name: "Botlimentor", description: "Let's feel good about ourselves", image: "/img/bots/botlimentor.png", path: "/bots/botlimentor", tags: ["slack"] };

  return (
    <Layout>
      <Head>
        <title>Bot Gang - Botlimentor</title>
        <meta name="description" content="Check out Botlimentor, a bot that will cheer you up with as many compliments as you want, and will make you feel secure with weird parts of yourself you never thought of!" />
        <meta name="keywords" content="" />
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
          <h3>Why use Botlimentor</h3>
          <p>
            The world is a tough place. Let's feel good about ourselves while using Botlimentor. Though the compliments you may receive are kinda weird, let's just appreciate it :)
          </p>

          <h3>Commands</h3>
          <ul>
            <li>
              <code>/complimentme</code> - Feeling down? Let's be nice for a moment :)
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
