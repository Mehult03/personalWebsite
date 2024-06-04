import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend box">
            <h3>Hyland Software</h3>
            <h3>Software Developer Intern</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Key Project</h4>
                  <small className='text-light'>Developed a full-stack solution for scheduling the expiration of signing keys, preventing the loss of
access for customers for up to 120 minutes during security events. Built the feature for the Nucleus Cloud
Platform using C# and HTML</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <small className='text-light'>Added a diagnostics page for LaunchDarkly feature flags for the identity provider and authentication application</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <small className='text-light'>Focused on writing clean code with an emphasis on unit and integration testing with NUnit and Moq</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend box">
            <h3>Ohio State University</h3>
            <h3>Undergraduate Teaching Assistant</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <small className='text-light'>Evaluated student code and solutions based on functionality and programming principles</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <small className='text-light'>Held office hours and oversaw weekly lab sections to assist students with labs and homework</small>
                </div>
              </article>
            </div>
        </div>
           {/* Skills section */}
        <div className="experience__backend box">
            <h3>Skills</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C#</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML/CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
      </div>
     
      
    </section>
  )
}

export default Experience