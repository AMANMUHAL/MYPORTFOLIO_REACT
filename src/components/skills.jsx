import React from 'react'

const skills = () => {
  return (
    <div> <section className="skills" id="skills">
    <div className="max-width">
      <h2 className="title">My Skills</h2>
      <div className="skills-content">
        <div className="column left">
          {/* <div class="text">INTERNSHIP</div>
  <p>
    <li class="intern">#Company Name "Where You work"</li>
    <li class="intern">#Company Name "Where You work"</li>
  </p> */}
          <br />
          <div className="text">PROJECT</div>
          <p>
          </p><li className="project">Portfolio (HTML, CSS, js, Bootstraps)</li>
          <li className="project">Drum kit (HTML, CSS, JS) </li>
          <li className="project">QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)</li>
          <li className="project">BANK'O'FY(Finance related Website)</li>
          <li className="project">Blog (HTML, CSS, Bootstraps)</li>
          <li className="project">Currently learning Backend dev</li>
          <p />
          <br />
          <div className="text">DEVELOPMENT SKILLS</div>
          <p>
            I'm familiar &amp; work on a daily basis with HTML, CSS, JavaScript, Bootstrap, React js and other modern frameworks.
          </p>
          {/* <a href="https://akashedu.in/" target="blank">Get Educate...</a> */}
        </div>
        <div className="column right">
          <div className="bars">
            <div className="info">
              <span>C++/DSA</span>
              <span>90%</span>
            </div>
            <div className="line python" />
          </div>
          <div className="bars">
            <div className="info">
              <span>HTML/CSS</span>
              <span>80%</span>
            </div>
            <div className="line html" />
          </div>
          <div className="bars">
            <div className="info">
              <span>Python</span>
              <span>60%</span>
            </div>
            <div className="line css" />
          </div>
          <div className="bars">
            <div className="info">
              <span>JavaScript</span>
              <span>40%</span>
            </div>
            <div className="line js" />
          </div>
          <div className="bars">
            <div className="info">
              <span>Bootstraps</span>
              <span>60%</span>
            </div>
            <div className="line bootstraps" />
          </div>
          <div className="bars">
            <div className="info">
              <span>React</span>
              <span>70%</span>
            </div>
            <div className="line django" />
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default skills