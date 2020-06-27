import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import Bot from '../components/Bot'

export default () => {
  const bots = [
    { name: "HyperLinky", description: "Organizing links one workspace at a time.", image: "/img/bots/hyperlinky.png", path: "/bots/hyperlinky", tags: ["slack"] },
    { name: "Deepborg", description: "Let's think deeper.", image: "/img/bots/deepborg.png", path: "/bots/deepborg", tags: ["slack"] },
    { name: "Roasty", description: "Self-esteem? What's that?", image: "/img/bots/roasty.png", path: "/bots/roasty", tags: ["slack"] },
    { name: "Botlimentor", description: "Let's feel good about ourselves", image: "/img/bots/botlimentor.png", path: "/bots/botlimentor", tags: ["slack"] }
  ];

  return (
    <Layout>
      <Head>
        <title>Bot Gang - Our Slack/Discord Bots</title>
        <meta name="description" content="Here's a list of all of the bots that we have at Bot Gang! These are built with Next.js/React, as well as the Slack API and Discord API!" />
        <meta name="keywords" content="Bot, Slack, Discord, Slack API, Discord API, Next.js, React.js" />
      </Head>
      <h1>All Bots</h1>

      <div className="bots-grid">
        {bots.map((bot, key) => {
          return <Bot data={bot} key={key} />
        })}
      </div>
    </Layout>
  )
}
