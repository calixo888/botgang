import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import Bot from '../components/Bot'

export default () => {
  const bots = [
    { name: "Deepborg", description: "Let's think deeper.", image: "/img/bots/deepborg.png", path: "/bots/deepborg", tags: ["slack"] },
    { name: "Roasty", description: "Self-esteem? What's that?", image: "/img/bots/roasty.png", path: "/bots/roasty", tags: ["slack"] },
    { name: "Botlimentor", description: "Let's feel good about ourselves", image: "/img/bots/botlimentor.png", path: "/bots/botlimentor", tags: ["slack"] }
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
