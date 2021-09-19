import React from 'react';
import './about.css';
import ContactCard from '../contactCard/contactCard';
import nicImg from '../../images/nic.png';
import harryImg from '../../images/harry.jpeg';
import dougImg from '../../images/doug.jpeg';
import brettImg from '../../images/brett.jpeg';
import budgetImg from '../../images/budget-img.jpg'
function About () {
    return (
        <div className='AboutUs'>
            <h1 className="text-center">About Us</h1>
            <br />
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-center">Building Student-First Financial Tools</h3>
                        <br />
                        <p>Our main goal of this project is to address financial issues common for college students, such as finding diverse scholarships that relate to individual demographics, and budgets based on financial-aid award cycles.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={budgetImg} aria-label="A wallet being squeezed"/>
                    </div>
                </div>
            </div>
            <h1 className="text-center">Meet the Team</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ContactCard image={nicImg} name='Nic Hodlofski' description="" />
                    </div>
                    <div className="col-md-3">
                        <ContactCard image={harryImg} name='Harry Wang' description='I am Harry! I am currently a Junior at UW-Madison, studying Computer Science and Mathematics. I am interested in back-end programming. I like reading fiction during my free time, and sometimes I would go for a run. And when I am not doing these things, I am usually sleeping….' />
                    </div>
                    <div className="col-md-3">
                        <ContactCard image={dougImg} name='Douglas Meier' description="Great to meet you! I've mostly worked on projects with ASP.NET MVC 5, but am excited to learn more about react. I study Computer Sciences and French at UW-Madison, graduating in May 2022" />
                    </div>
                    <div className="col-md-3">
                        <ContactCard image={brettImg} name='Brett Falck' description="Hey everyone, I'm Brett Falck a Junior at UW - Madison in Computer Science. In my free time I enjoy running, biking, reading, and of course programming." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;