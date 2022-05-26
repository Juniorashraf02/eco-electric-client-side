import React from 'react';
import img from '../../Images/istiak.png'
import { SiFacebook } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp, BsMessenger, BsGithub, BsLinkedin } from 'react-icons/bs';

const Portfolio = () => {
    return (
        <div className="mt-28 container mx-auto w-3/4 font-sans ">

            <img className="mx-auto" src={img} alt="" />
            <span className="text-2xl text-blue-700 font-bold text-left"><span className="text-red-400">Hi</span> there!!! <br /> I am <span className="text-red-400">MD. Istiak Ashraf</span></span>
            <p className=" text-justify">

                <p className="mt-5">
                    <p className="mt-5">
                        <span className="text-semibold text-blue-400 my-20 text-2xl"> CARRIER OBJECTIVE</span>
                    </p>
                    ➤ I am a dedicated and practicing full stack developer with solid knowledge in different technologies and
                    self-motivated and hardworking for an opportunity to work in a challenging environment to prove my skills and
                    utilize my knowledge in the growth of the organization
                </p>

                <p className="mt-5">
                    <span className="text-semibold text-blue-400 my-20 text-2xl"> SKILLS</span>
                </p>
                <span>
                    <b>Expertise:</b> React.js, JavaScript, HTML, CSS, Bootstrap, tailwind CSS, Firebase <br />
                    <b>Comfortable:</b> Express.js, MongoDB, JWT <br />
                    <b>Familiar:</b> Redux, Context API, REST API, Browser APIs.<br />
                    <b> Tools:</b> Git, Github, VS Code, Firebase, Heroku, Figma, Adobe XD, Adobe photoshop, Adobe Illustrator

                </span>

                <p className="text-semibold text-blue-400 mt-10 text-2xl">
                    PROJECTS
                </p>
                <div>
                    <div>
                        <span>➤ <span classname="font-semibold">Fruits Management</span> |
                            <span classname="font-semibold">Full stack project</span> | <span classname="font-semibold">
                                <u>
                                    <a href="https://warehouse-management-80db8.web.app/">Live Site</a>
                                </u>
                            </span> |
                            <span classname="font-semibold">
                                <u>
                                    <a href="https://github.com/Juniorashraf02/fruits-management-client-side">Github-Client</a></u></span> | <span classname="font-semibold">
                                <u>
                                    <a href="https://github.com/Juniorashraf02/fruits-management-server-side">Github-Server</a></u></span> | <span classname="font-semibold">Features:</span></span>
                    </div>
                    <div>
                        <span>• Users can add an item and can delete it</span> <br />
                        <span>• Logged in users can add or decrease their quantity</span>
                    </div>
                    <div>
                        <span>Used: React.js, React Router, Express.js, MongoDB, Firebase Authentication, Tailwind CSS</span>
                    </div>
                </div>
                <div className="mt-5">
                    <div>
                        <span>➤
                            Doctors Portal | &nbsp;
                            <span classname="font-semibold">Full stack project</span> |  &nbsp;
                            <span classname="font-semibold">
                                <u><a classname="" href="https://doctors-portal-1d0a4.web.app/">Doctors Portal</a></u>
                            </span> | <span classname="font-semibold">
                                <u>
                                    <a href="https://github.com/Juniorashraf02/doctors-portal-client-side">Github-Client</a>
                                </u>
                            </span> |&nbsp;
                            <span classname="font-semibold">
                                <u>
                                    <a href="https://github.com/Juniorashraf02/doctors-portal-server-side"> Github-Server</a>
                                </u>
                            </span> | &nbsp;
                            <span classname="font-semibold">Features:</span>
                        </span>
                    </div>
                    <div>
                        <span>• Logged in users can book a service</span> <br />
                        <span>• Payment method is added</span> <br />
                        <span>• Admin can make another admin. Some routes are only for admin. General users can’t enter into it</span> <br />
                    </div>
                    <div>
                        <span>Used: React.js, React Router, Express.js, MongoDB, Firebase Authentication, Tailwind CSS</span>
                    </div>
                </div>
                <div>
                    <p className="mt-5">
                        <span className="text-semibold text-blue-400 my-20 text-2xl">  EDUCATION</span>
                    </p>

                    <div>
                        Pabna Textile Engineering College, Pabna, Bangladesh <br />
                        B.Sc (Hons) in textile Engineering (Undergraduate) <br />
                        Graduation Year: 2024 (appoximately ) <br />
                    </div>

                </div>


                <div>
                    <p className="mt-5">
                        <span className="text-semibold text-blue-400 my-20 text-2xl">  LANGUAGE</span>
                    </p>

                    <div>
                        • English - Conversational <br />
                        • Hindi - Fluent <br />
                        • Bangla - Native  <br />
                    </div>
                </div>

                <div>
                    <p className="mt-5">
                        <span className="text-semibold text-blue-400 my-20 text-2xl">                      EXTRA CURRICULAR ACTIVITIES
                        </span>
                    </p>
                    <div className="mb-20">
                        ➤ Achieved 11th position in distinguished National Undergrad level competition Textile Talent Hunt season 7 at
                        Pabna Textile Engineering College Zone <br />
                        ➤ Me and my team acquired first place in Hult Prize at campus competition <br />
                    </div>
                </div>
            </p>
            <div className=" pt-9 ">
                <p className="uppercase text-gray-400 font-semibold mb-5">Follw me on</p>
                <div className="flex justify-center mb-9 ">
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "10px" }} target="_blank" href="https://www.facebook.com/juniorashraf02" rel="noreferrer">
                        <SiFacebook></SiFacebook>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "30px" }} target="_blank" href="https://www.linkedin.com/in/istiakashraf/" rel="noreferrer">
                        <BsLinkedin></BsLinkedin>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "30px" }} target="_blank" href="mailto:shuvo.istiak11@gmail.com" rel="noreferrer">
                        <SiGmail></SiGmail>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "30px" }} target="_blank" href=" https://wa.me/+8801612016614">
                        <BsWhatsapp></BsWhatsapp>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "30px" }} target="_blank" href="http://m.me/juniorashraf02" rel="noreferrer">
                        <BsMessenger></BsMessenger>
                    </a>
                    <a className="text-2xl" style={{ "color": "black", "marginLeft": "30px" }} target="_blank" href="https://github.com/Juniorashraf02" rel="noreferrer">
                        <BsGithub></BsGithub>
                    </a>

                </div>
            </div>
        </div >
    );
};

export default Portfolio;


















