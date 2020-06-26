import Head from 'next/head'
import Layout from '../components/layouts/Layout'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Bot Gang - Contact us!</title>
        <meta name="description" content="Have a question, need support, or just want to give some feedback or a testimonial? Just send a message to the Bot Gang!" />
        <meta name="keywords" content="Contact, Message, Bot Gang, Slack, Discord" />
      </Head>
      <h1>Contact</h1>
      <div className="contact-grid">
        <div>
          <form action="https://formspree.io/hello@botgang.tech" method="post">
            <label>Name:</label>
            <input className="form-control" type="text" name="Name" placeholder="Name" />

            <label>Email:</label>
            <input className="form-control" type="email" name="Email" placeholder="Email" />

            <label>Message:</label>
            <textarea className="form-control" name="Message" rows="5" placeholder="Message"></textarea>

            <input className="btn btn-secondary" type="submit" value="Contact us!" />
          </form>
        </div>

        <img src="/img/illustrations/contact.svg" />
      </div>
    </Layout>
  )
}
