import React from 'react';
import ImageSlider from './ImageSlider';

const herokuImageLink = "https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png";
const reactImageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";
const reduxImageLink = "https://miro.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png";
const springBootImageLink = "https://dzone.com/storage/temp/12434118-spring-boot-logo.png";
const javaImageLink = "https://codehustler.org/wp-content/uploads/2012/12/java_logo.png";
const mongodbImageLink = "https://www.pngkey.com/png/full/383-3838923_open-mongodb-icon.png";
const unityImageLink = "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png";
const androidImageLink = "https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png";
const macImageLink = "https://lh3.googleusercontent.com/proxy/eTkQ0eT_cMm_6cL2vUrsED5gQUlu3ALgVV0vF22ZqCV6B0jj5bjEQq_AAtv7hrPSPJ5UXsIWbH1oaktuLORthcTZ5DnuoG-HrAOhkl4MabJeCJxDQgeKpRmKo6BPv2q4AIoggZ8P";
const windowImageLink = "https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png";

const slideImages = [
    { image: '../../../game_img/Apparition/pic_1.png' },
    { image: '../../../game_img/Tribeka/pic_1.png' },
    { image: '../../../game_img/Brokul/pic_1.png' },
    { image: '../../../game_img/Tokembu/pic_3.png' },
    { image: '../../../game_img/Light_The_Way/pic_4.png'},
    { image: '../../../game_img/Deriko_Delta/pic_2.png'},
    { image: '../../../game_img/Stimps_Rage/pic_1.png'}

];

export const Home = () => {
    return (
        <div className="home-parent-div">
            <ImageSlider images={slideImages}/>
            <div className="personal-info">
                <div className="personal-info-inner">
                    <h1>
                        Introduction
                    </h1>
                    <p>
                        Hello my name is Paul Oladele and this is my website.
                    </p>
                    <p>
                        This website is meant to demostrate my web development skills and also to share my passion for game development.
                    </p>
                </div>

                <div className="personal-info-inner">
                    <h1>
                        Work History
                    </h1>
                    <div>
                        <p>
                            I started work in the web develpment field in June 2018 as a technical apprentice for Gamesys Group which is an online software development and gaming business, till June 2020 when my apprenticeship ended.
                        </p>
                        <p>
                            I was part of the Poker team and our main goal was to develop and maintain the Poker product.
                            </p>
                        <p>
                            The poker product front end was built using different technologies, the lobby was built
                        using <span>React</span> and the poker table was built using <span>PixiJS</span>.
                        </p>
                        <p>
                            Our backend systems were built in <span>Java</span> using the <span>Spring framework</span>. We used <span> ActiveMQ</span> as our message broker.
                        </p>

                        <p>
                           For version control we used <span>Git</span> and for tracking and managing our work we used <span>Jira</span>.
                        </p>

                        <p>
                          We used <span>Jira</span> to track and manage our work and used <span>Scrumban</span> as a way of working for the team.
                        </p>
                        <p>
                            During the period of my apprenticeship I worked on both the back-end and front-end used systems and was able to gain experience using the following technologies:
                        </p>
                        <ul className="skills-list-work-history">
                            <li>React</li>
                            <li>Redux</li>
                            <li>SASS</li>
                            <li>Spring</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="personal-info-inner">
                    <h1>
                        Technologies
                    </h1>
                    <p>
                        Technologies used to create and deploy this website:
                    </p>
                    <ul className="skills-list-personal">
                        <li>React for the UI</li>
                        <li>SCSS for styling</li>
                        <li>Redux for state management</li>
                        <li>Java Springboot for the backend</li>
                        <li>MongoDB for the database</li>
                        <li>Heroku to deploy the application</li>
                    </ul>
                </div>
            </div>
            {/* <div className="tools_images_holder">
                <div>
                    <img src={herokuImageLink} alt=""/>
                </div>
                <div>
                    <img src={reactImageLink} alt=""/>
                </div>
                <div>
                    <img src={reduxImageLink} alt=""/>
                </div>
                <div>
                    <img src={springBootImageLink} alt=""/>
                </div>
                <div>
                    <img src={javaImageLink} alt=""/>
                </div>
                <div>
                    <img src={mongodbImageLink} alt=""/>
                </div>
                <div>
                    <img src={unityImageLink} alt=""/>
                </div>
            </div> */}
        </div >
    )
}

export default Home;