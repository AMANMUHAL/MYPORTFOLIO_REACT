import React from 'react'

const contact = () => {
  return (
    <div>
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.</p>
            <div className="icons">
              <a href="/">
              </a><div className="row"><a href="https://www.instagram.com/aman.muhal/">
                  <i className="fa-solid fa-user-large" />
                </a><div className="info"><a href="https://www.instagram.com/aman.muhal/">
                    <div className="head">Name</div>
                  </a><div className="sub-title"><a href="https://www.instagram.com/aman.muhal/" style={{textDecoration: 'none', color: '#333'}}> Aman Muhal</a></div>
                </div>
              </div>
              <div className="row">
                <i className="fa-solid fa-location-dot" />
                <div className="info">
                  <div className="head">&nbsp;Address</div>
                  <div className="sub-title">&nbsp;New Delhi, India</div>
                </div>
              </div>
              <div className="row">
                <i className="fa-solid fa-envelope" />
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title"><a href="mailto:#" style={{textDecoration: 'none', color: '#333'}}> amanmuhal02@gmail.com</a></div>
                </div>
              </div>
              <div className="row">
                <i className="bi bi-translate" />
                <div className="info">
                  <div className="head">Language Known</div>
                  <div className="sub-title">Hindi, English</div>
                </div>
              </div>
              {/* ------------------------------ Social ------------------------------ */}
              <br />
              <div className="social-menu">
                <ul>
                  <li><a href="/"><i className="fa-brands fa-github" /></a></li>
                  <li><a href="https://www.linkedin.com/in/aman-muhal-b40980209/"><i className="fa-brands fa-linkedin-in" /></a></li>
                  <li><a href="https://www.instagram.com/aman.muhal/"><i className="fa-brands fa-instagram" /></a></li>
                  <li><a href="https://twitter.com/AmanMuhal"><i className="fa-brands fa-twitter" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* --x--------------------------- Social ---------------------------x-- */}
          {/* ------------------------------ Reach to Me ------------------------------ */}
          <div className="column right">
            <div className="text">Message me</div>
            <form action="mailto:amanmuhal02@gmail.com">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea cols={30} rows={10} placeholder="Message.." required defaultValue={""} />
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default contact