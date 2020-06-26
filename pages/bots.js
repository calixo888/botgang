import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import Bot from '../components/Bot'

export default () => {
  const bots = [
    { name: "Bot 1", description: "This is a bot.", image: "/img/bots/bot.png", path: "/bots/deepborg", tags: ["slack"] },
    { name: "Bot 2", description: "This is a bot again.", image: "/img/bots/bot.png", path: "/bots/roasty", tags: ["slack", "discord"] }
  ];

  return (
    <Layout>
      <h1>All Bots</h1>

      <div className="bots-grid">
        {bots.map((bot, key) => {
          return <Bot data={bot} key={key} />
        })}
      </div>
    </Layout>
  )
}
