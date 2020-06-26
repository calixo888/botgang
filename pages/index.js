import Head from 'next/head'
import { Helmet } from "react-helmet";
import Link from 'next/link'
import Bot from '../components/Bot'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import Layout from '../components/layouts/Layout'

export default () => {
  const featuredBots = [
    { name: "Deepborg", description: "Let's think deeper.", image: "/img/bots/deepborg.png", path: "/bots/deepborg", tags: ["slack"] },
    { name: "Roasty", description: "Self-esteem? What's that?", image: "/img/bots/roasty.png", path: "/bots/roasty", tags: ["slack"] },
    { name: "Botlimentor", description: "Let's feel good about ourselves", image: "/img/bots/botlimentor.png", path: "/bots/botlimentor", tags: ["slack"] }
  ];
  
  return (
    <Layout>
      <header>
        <div className="split-grid header-grid">
          <div>
            <h1 style={{
              fontSize: "60px"
            }}>This. is. Bot Gang.</h1>
            <p>
              A collection of the baddest, gnarliest, and most edgy bots you'll ever hear about, and it's all listed for anyone to use. We'll infiltrate your communities, do what our descriptions says we do, and vanish.
            </p>
            <p>
              Make your Slack, Discord, or your life in general more gangsta with The Bot Gang.
            </p>
            <div className="cta-buttons">
              <Button link="/about" text="The Gang Leader" type="ghost" />
              <Button link="/bots" text="Our Bot Gangstas" type="solid" />
            </div>
          </div>

          <img src="/img/illustrations/index.svg" alt="" />
        </div>
      </header>

      <section>
        <h1>Featured Bot Gangsters</h1>
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
            <Accordion title="What is the Bot Gang?" content="The Bot Gang is a collection of Slack/Discord bots that are open for distrubtion and installation into your workspaces/servers for free." />
            <Accordion title="Why does the Bot Gang exist?" content="Why wouldn't we? We're just a bunch of robotic gangsters coming for your virtual and digital communities :)" />
            <Accordion title="What's the goal of Bot Gang?" content="To make the world a more ghetto and robotic place - by spreading digital crime around all virtual communities." />
          </div>
          <div>
            <Accordion title="Who's the gang leader?" content="Calix Huang is the almighty gang leader. He makes the rules. Whatever he says, goes. Anyone who messes with him will surely face the consequences." />
            <Accordion title="Where's the Bot Gang located?" content="Everywhere, and nowhere. We appear, and then we're gone, and you won't even notice." />
            <Accordion title="Should I be scared?" content="Yes." />
          </div>
        </div>
      </section>
    </Layout>
  )
}
