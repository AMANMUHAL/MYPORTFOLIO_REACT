import React from 'react'
import MyComponent from './typed/typed'

const home = () => {
  return (
    <div>
        <section className="home" id="home" >
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, This is</div>
          <div className="text-2">Aman Muhal</div>
          {/* <div className="text-3">And I'm a <span className="typing" /></div> */}
          
          <div className="text-3" style={{ display: 'inline', whiteSpace: 'nowrap' }}><p>And I'm a  <MyComponent /> </p></div>
          <a href="/">Hire me</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default home