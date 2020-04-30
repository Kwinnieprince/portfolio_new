
import React, { useState } from "react"
import Image from "../components/image"
import { Link } from "gatsby"
import "./layout.css"

const Sidebar = () => {
  const [toggle, setToggle] = useState(true)

  function toggleDarkmode() {
    if(toggle){
      var element = document.getElementById("body");
      element.classList.add("dark");
      setToggle(false);
    }else{
      var element = document.getElementById("body");
      element.classList.remove("dark");
      setToggle(true);
    }
    
  }

  return (
    <>
      <div style={{ maxWidth: `400px`, margin: `0 auto`, zIndex: 1000 }}>
                  <Link  to="/">
                    <Image />
                  </Link>
                  </div>
                  <div style={{ margin: `0 auto`, zIndex: 20000}}>
                    <ul style={{listStyle: `none`, textTransform: `lowercase`, textAlign: `center`, margin: 0}}>
                      <li style={{marginTop: `-1.8em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                            <Link 
                            style={{textDecoration: `none`, fontSize:30}}
                            to="/about"
                            >Over mij</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li style={{marginTop: `1.2em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                          <Link 
                          style={{textDecoration: `none`, fontSize:30}}
                          to="/cv">Mijn CV</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li style={{marginTop: `1.2em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                          <Link 
                          style={{textDecoration: `none`, fontSize:30, cursor: `pointer`}}
                          to="/work"
                          >Mijn werk</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li style={{marginTop: `1.2em`}}>
                        {/* <GlitchEffect onHover={true} duration={"5s"}> */}
                          <Link 
                          style={{textDecoration: `none`, fontSize:30}}
                          to="/contact">Contacteer mij</Link>
                        {/* </GlitchEffect> */}
                      </li>
                      <li>
                        <div className="colorchangediv" style={{marginTop: `1.2em`}}>		
                          <input type="checkbox" id="toggle"/>
                          <label htmlFor="toggle" style={{margin: `0 auto`}} onClick={() => toggleDarkmode()}></label>
                        </div>
                      </li>
                    </ul>
                  </div>
            </>
  )
}
export default Sidebar