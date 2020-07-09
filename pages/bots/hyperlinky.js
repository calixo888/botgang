import Head from 'next/head'
import Layout from '../../components/layouts/Layout';
import Bot from '../../components/Bot';

export default (req, res) => {
  const client_id = process.env.HYPERLINKY_CLIENT_ID;
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
            Are the links you're sharing in your workspace becoming untidy and overwhelming? HyperLinky helps to organize those links into easy-to-remember aliases that are native to your workspace, so that you can call on links on demand!
          </p>

          <div className="text-right">
            <a href={oAuthLink}><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
          </div>
        </div>

        <div>
          <h3>Why'd I build this?</h3>
          <p>
            I noticed that a lot of the links in the Coronavirus Visualization Team (CVT) Slack workspace was getting overwhelming and hard to recall as we grew in size and information management became harder.
          </p>

          <h3>How does it work?</h3>
          <p>
            With HyperLinky, links can be assigned with unique, easy-to-remember aliases that can be called on on demand. You can list out all the links native to your workspace, create links, and delete them!
          </p>

          <h3>Commands</h3>
          <ul>
            <li>
              <code>/addlink [alias] [link]</code> - Create a new link by supplying the alias and the link you want to assign
            </li>
            <li>
              <code>/alllinks</code> - List out all links that have been saved native to your workspace.
            </li>
            <li>
              <code>/getlink [alias]</code> - Returns the link assigned to the provided alias
            </li>
            <li>
              <code>/deletelink [alias]</code> - Deletes the link assigned to the provided alias
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
