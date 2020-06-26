import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import Bot from '../components/Bot'

export default () => {
  const [bots, setBots] = useState([
    { name: "Bot 1", description: "This is a bot.", image: "/img/bots/bot.png", path: "/bots/deepborg" },
    { name: "Bot 2", description: "This is a bot again.", image: "/img/bots/bot.png", path: "/bots/roasty" }
  ]);

  return (
    <Layout>
      <h1>Bots</h1>

      <div className="bots-grid">
        {bots.map((bot, key) => {
          return <Bot data={bot} key={key} />
        })}
      </div>
    </Layout>
  )
}
