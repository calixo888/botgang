import Head from 'next/head'
import { Helmet } from "react-helmet";
import Link from 'next/link'
import Bot from '../components/Bot'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import Layout from '../components/layouts/Layout'

export default () => {
  const featuredBots = [
    { name: "Bot 1", description: "This is a bot.", image: "/img/bots/bot.png", path: "/bots/deepborg", tags: ["slack"] },
    { name: "Bot 2", description: "This is a bot again.", image: "/img/bots/bot.png", path: "/bots/roasty", tags: ["slack", "discord"] }
  ];

  return (
    <Layout>
      <header>
        <div className="split-grid header-grid">
          <div>
            <h1>This. is. Bot Gang.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="cta-buttons">
              <Button link="#" text="Button" type="ghost" />
              <Button link="#" text="Button" type="solid" />
            </div>
          </div>

          <img src="/img/illustrations/index.svg" alt="" />
        </div>
      </header>

      <section>
        <h1>Featured Bots</h1>
        <div className="bots-grid">
          {featuredBots.map((bot, key) => {
            return <Bot data={bot} key={key} />
          })}
        </div>
      </section>

      <section>
        <h1>FAQs</h1>
        <div className="faq-grid">
          <div>
            <Accordion title="hello" content="content" />
            <Accordion title="hello" content="content" />
            <Accordion title="hello" content="content" />
          </div>
          <div>
            <Accordion title="hello" content="content" />
            <Accordion title="hello" content="content" />
            <Accordion title="hello" content="content" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
