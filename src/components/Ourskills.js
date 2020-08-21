import React from 'react'
import Cards from "./cards";
import {FaReact} from 'react-icons/fa'
import {GrGatsbyjs} from 'react-icons/gr'
import {SiKubernetes} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'

import { Container,Row,Col,Card,Button } from 'react-bootstrap';

function Ourskills() {
    return (
        <div className="project-section">
           
        <Container  className="project ">
        <div className="project-heading text-left"><h3 className="basic-heading">Skills !</h3></div>
        <div class="container skills">
     
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><GrGatsbyjs className="timeline-ic violet"/></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><FaReact className="timeline-ic"/></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon">< SiKubernetes className="timeline-ic"/></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon">< DiJavascript className="timeline-ic text-warning"/></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        </Container>
        </div>
    )
}

export default Ourskills
