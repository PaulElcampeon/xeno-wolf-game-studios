import React from 'react';
import ImageSlider from './ImageSlider';

const herokuImageLink = "https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png";
const reactImageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";
const reduxImageLink = "https://miro.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png";
const springBootImageLink = "https://dzone.com/storage/temp/12434118-spring-boot-logo.png";
const javaImageLink = "//cdn.freebiesupply.com/logos/thumbs/2x/java-logo.png";
const mongodbImageLink = "https://www.pngkey.com/png/full/383-3838923_open-mongodb-icon.png";
const unityImageLink = "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png";
const androidImageLink = "https://cdn1.iconfinder.com/data/icons/logotypes/32/android-512.png";
const macImageLink = "https://lh3.googleusercontent.com/proxy/eTkQ0eT_cMm_6cL2vUrsED5gQUlu3ALgVV0vF22ZqCV6B0jj5bjEQq_AAtv7hrPSPJ5UXsIWbH1oaktuLORthcTZ5DnuoG-HrAOhkl4MabJeCJxDQgeKpRmKo6BPv2q4AIoggZ8P";
const windowImageLink = "https://seeklogo.com/images/W/windows-10-icon-logo-5BC5C69712-seeklogo.com.png";

export const Home = () => {
    return (
        <div className="home-parent-div">
            <ImageSlider />
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
                            I started work in the web develpment field in June 2018 as a technical apprentice for Gamesys Group which is an online software development and gaming business, till June 2020 when my contract ended.
                        </p>
                        <p>
                            I was part of the Poker team and our main goal was to develop and maintain the Poker product.
                            </p>
                        <p>
                            The poker teams front end is built using difference technologies, the lobby is built
                        using <span>React</span> and the poker table is built using <span>PixiJS</span>.
                        </p>
                        <p>
                            Our backend systems were built in <span>Java</span> using the <span>Spring framework</span>. We used <span> ActiveMQ</span> as our message broker.
                        </p>

                        <p>
                            During that period of time I used technologies such as:
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
                        Technolgies used to create this website:
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
            {/* <img className="comp-logo" src="./wolf logo.png" alt="xeno-wolf-logo" /> */}
        </div >
    )
}

export default Home;