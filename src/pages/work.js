import React from "react"
import { Link } from "gatsby"
import {FaGithubAlt,FaGlobe} from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WeerWilseleImg from "../components/weerWilseleImg"
import NodeRedImg from "../components/NodeRedImg"
import PicrossImg from "../components/PicrossImg"
import UsoImg from "../components/UsoImg"
import SpringImg from "../components/SpringImg"
import FoodImg from "../components/FoodImg"
import Sidebar from "../components/Sidebar"

const WorkPage = () => (
  <Layout>
    <div id="workGrid">
      <SEO title="Home" />
      <h1>My work</h1>
      <div id="workWrapper">
          <div id="worksOne">
              <div style={{ maxWidth: `400px`}}>
                <a href="https://weg.kwinten.me">
                  <WeerWilseleImg/>
                </a>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>Weer Wilsele</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>JS | React | Node.js | Python | HTML | Azure</h4>
                <p >
                  <a href="https://weg.kwinten.me">
                    <FaGlobe/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksTwo">
          <div style={{ maxWidth: `400px`}}>
                <a href="https://github.com/Kwinnieprince/pink_flamingo">
                  <NodeRedImg/>
                </a>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>IOT automating project</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>IBM Cloud | Node-RED | Arduino </h4>
                <p>
                  <a href="https://github.com/Kwinnieprince/pink_flamingo">
                    <FaGithubAlt/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksThree">
          <div style={{ maxWidth: `400px`, border:`0.5px solid grey`}}>
                <a href="https://food.kwinten.me">
                  <FoodImg/>
                </a>
              </div>
            <div className="workGridTwo">
              <h4 style={{marginBottom: `0.5em`}}>Website to vind meals</h4>
              <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>JS | React | Gatsby </h4>
              <p>
                <a style={{marginRight: `0.75em`}}href="https://github.com/Kwinnieprince/colruyt_recipe_search">
                  <FaGithubAlt/>
                </a>
                <a href="https://food.kwinten.me">
                    <FaGlobe/>
                  </a>
              </p>
            </div> 
          </div>
          <div id="worksFour">
          <div style={{ maxWidth: `400px`, border:`0.5px solid grey`}}>
            <a href="https://github.com/Kwinnieprince/IP_project">
                <SpringImg/>
            </a>
              </div>
            <div className="workGridTwo">
              <h4 style={{marginBottom: `0.5em`}}>Full-stack web project in Spring</h4>
              <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>Java | Spring Boot | Docker | Jenkins</h4>
              <p>
                <a href="https://github.com/Kwinnieprince/IP_project">
                  <FaGithubAlt/>
                </a>
              </p>
            </div> 
          </div>
          <div id="worksFive">
              <div style={{ maxWidth: `400px`}}>
                <a href="https://github.com/Kwinnieprince/Picross">
                  <PicrossImg/>
                </a>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>PiCross</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>WPF | C#</h4>
                <p>
                  <a href="https://github.com/Kwinnieprince/Picross">
                    <FaGithubAlt/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksSix">
              <div style={{ maxWidth: `400px`}}>
                <a href="https://usoleuven.be">
                  <UsoImg/>
                </a>
              </div>
              <div className="workGridTwo">
                <h4 style={{marginBottom: `0.5em`}}>Website USO-Leuven</h4>
                <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>Wordpress</h4>
                <p>
                  <a href="https://usoleuven.be">
                    <FaGlobe/>
                  </a>
                </p>
              </div>
          </div>
          <div id="worksSix">
            <div className="workGridTwo">
              <h4 style={{marginBottom: `0.5em`}}>Chat-app</h4>
              <h4 style={{fontSize: 16, fontWeight: `normal`, marginBottom: `0.5em`}}>Java | JS | Angular</h4>
              <p>
                <a href="https://github.com/Kwinnieprince/webontwikkeling_4_java">
                  <FaGithubAlt/>
                </a>
              </p>
            </div>
          </div>
      </div>
      <div className="navigation" style={{gridColumn: 2, gridRow: 2, marginTop: `-107px`}}>
        <Sidebar></Sidebar>
      </div>
    </div>
    <footer>
         <p>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://kwinten.me">Kwinten Delrue</a> with Gatsby
          </p>
     </footer>
  </Layout>
)

export default WorkPage
