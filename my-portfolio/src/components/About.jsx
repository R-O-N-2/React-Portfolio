import family_img from "../assets/my_family.jpeg"
const About = () => {
    return (
        <div className="projectHeader">
            <h1 className="name">Ron Rose</h1>
                <ul>
                    <li className="aboutMe">
                        <p className="aboutText">
                            Hello! I am a passionate software engineer based in the vibrant city of Tampa, FL. &nbsp;Although tech is my profession beyond my love for coding and technology, my greatest joy lies in my family. <br/></p>

                        <p className="aboutText">
                            As a devoted husband and a doting parent, my family is at the heart of everything I do. &nbsp;They inspire me to be the best version of myself, both personally and professionally. &nbsp;Balancing my career with family life has taught me the value of time management, resilience, and the importance of building strong relationships. <br/></p>

                        <p className="aboutText">
                            In the ever-evolving world of software engineering, I thrive on staying ahead of the curve. &nbsp;I am constantly seeking new challenges and opportunities to enhance my skills and knowledge. &nbsp;My curiosity drives me to explore emerging technologies and innovative solutions to create software that makes a positive impact.<br/></p>

                        <p className="aboutText">
                            Thank you for visiting my profile, and I look forward to connecting with fellow professionals, sharing experiences, and making a positive impact in both the software development community and the lives of those around me. &nbsp;If you want to collaborate or discuss exciting projects, don't hesitate to reach out!
                        </p>
                    </li>
                    <img className="myFamily" src={family_img} alt="image of my family and I" style={{width: 400}}/>
                </ul>
        </div>
    )
}

export default About