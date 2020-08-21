import React from 'react'
import Cards from "./cards";
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
function Aboutus() {
    return (
        <div className="project-section">
           
        <Container  className="project ">
        <div className="project-heading text-left "><h3 className="basic-heading" style={{marginLeft:"0"}}>About Us!</h3></div>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <div>
                        <p className="text-muted text-left">Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
                        <p className="text-muted text-left">
Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
Here are a few technologies I've been working with recently:
JavaScript (ES6+)
HTML & (S)CSS
React
Vue
Node.js
WordPress
</p>
<p className="text-muted text-left">
Here are a few technologies I've been working with recently:
</p>
<ul className="list text-muted">
    <li>JavaScript</li>
    <li>SCSS</li>
    <li>React</li>
    <li>Gatsby</li>
    <li>HTML5</li>
    <li>GSAP</li>
</ul>
                    </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} >
                    <div className="big-wrapper">
                        <div className="wrapper-img">
                            <img src={require('../images/ali.jpeg')} alt="ali" className="img-fluid ov" style={{borderRadius:"6px",}} />
                        </div>
                    
                    </div>
                    </Col>
            </Row>
            <div className="space"></div>

            <Row>

            <Col sm={12} md={6} lg={6} >
                    <div className="big-wrapper2">
                        <div className="wrapper-img">
                            <img src={require('../images/ali.jpeg')} alt="ali" className="img-fluid" style={{borderRadius:"6px",}} />
                        </div>
                    
                    </div>
                    </Col>


                <Col sm={12} md={6} lg={6}>
                    <div>
                        <p className="text-muted text-left">Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
                        <p className="text-muted text-left">
Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
Here are a few technologies I've been working with recently:
JavaScript (ES6+)
HTML & (S)CSS
React
Vue
Node.js
WordPress
</p>
<p className="text-muted text-left">
Here are a few technologies I've been working with recently:
</p>
<ul className="list text-muted">
    <li>JavaScript</li>
    <li>SCSS</li>
    <li>React</li>
    <li>Gatsby</li>
    <li>HTML5</li>
    <li>GSAP</li>
</ul>
                    </div>
                    </Col>
            </Row>



        </Container>
        </div>
    )
}

export default Aboutus
