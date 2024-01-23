import Transition from "./script"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BBBanner from "./portfolio/Media/Images/ByteBanditsBanner.gif"
import FastTransition from "./portfolio/Media/Images/Fast_transition.gif"
import ProfilePic from "./portfolio/Media/Images/profile_img.jpg"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Portfolio() {
    return (
        <>

            <center>
                <div>
                    <img src={BBBanner} alt="Byte Bandits Banner" />
                </div>
            </center>

            <header>
                <nav id="nav_menu">
                    <ul>
                        <li><a href="../index.html" className="transition-link"
                            data-transition={FastTransition}>Home</a>
                        </li>
                        <li><a href="../ben-portfolio/ben-index.html" className="transition-link"
                            data-transition={FastTransition}>Ben</a>
                        </li>
                        <li><a href="../randall-portfolio/randall-index.html" className="transition-link"
                            data-transition={FastTransition}>Randall</a></li>
                        <li><a href="../jessica-portfolio/jessica-index.html" className="transition-link"
                            data-transition={FastTransition}>Jessica</a></li>
                        <li><a href="../brian-portfolio/brian-index.html" className="transition-link"
                            data-transition={FastTransition}>Brian</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <h1>Blah Blah</h1>
            <img src={ProfilePic} alt="Blah Blah" width="250px" />

            <h2>Contact Information</h2>
            <p>1234 Somewhere, Dinosaur CO 81610</p>
            <p><i className="fa-solid fa-envelope"></i> <a href="blahblah@gmail.com">blahblah@gmail.com</a></p>
            <p><i className="fa-solid fa-phone-volume"></i> 55-IS-POTATO</p>


            <h2>Education</h2>
            <ul>
                <li>High School Diploma • Olympic High School • Bremerton, WA • 2005</li>
                <li>Associate's in Arts and Sciences • Olympic College • Bremerton, WA • 2008</li>
            </ul>
            <h2>Skills</h2>
            <p>Proficient System and Network Administrator with first-hand experience with Active Directory, DNS, DHCP,
                Exchange
                Services, backups, cybersecurity, port security, and firewalls. Successful at problem-solving
                computer-related
                and network problems with an efficient and organized approach. Self-motivated approach to monitoring and
                resolving troublesome IT issues.</p>
            <section>
                <ul>
                    <li>Windows Server Administrator</li>
                    <li>Network Administrator</li>
                    <li>Cisco and Alcatel Networking Devices</li>
                    <li>Port Security</li>
                    <li>Diagnostic Tools</li>
                    <li>VMWare and Oracle (VM)</li>
                </ul>
            </section>
            <aside>
                <ul>
                    <li>Classified and Cryptographic Device Handling</li>
                    <li>Data Backups</li>
                    <li>Technical Support and Assistance</li>
                    <li>Hardware and Software Maintenance</li>
                    <li>Disaster Recovery and Failover</li>
                    <li>Tenable and ACAS Scans</li>
                </ul>
            </aside>

            <h2>Work Experience</h2>
            <h3>Information Systems Technician</h3>
            <p>United States Navy</p>
            <p>February 2015 to August 2022</p>
            <ul>
                <li>Monitored network connections, firewalls, and endpoint assets to maintain maximum up-time and
                    functionality
                    within a span of 5 enclaves.</li>
                <li>Implemented security policies and distributed updates to end users.</li>
                <li>Used ticketing systems to monitor, manage, and process support actions and requests.</li>
                <li>Identified and solved technical issues using diagnostic tools and tactics.</li>
                <li>Proper handling, documentation, and distribution of classified and cryptographic material.</li>
                <li>Processed outgoing and incoming messages to and from other commands.</li>
                <li>Established internet connectivity via satellites and T1 Pier services.</li>
                <li>Performed backups of ship's servers, switches, and routers throughout all 5 enclaves.</li>
                <li>Restored network functionality in a timely manner after numerous power hits.</li>
            </ul>

            <a className="hiddenIcon" href="#" onclick="promptForSecretCode();"><i className="fa-solid fa-key"></i></a>
            <footer>
                <p>&copy; 2023 ByteBandits</p>
            </footer>

            <p className="hidden">The key to the code is hidden <br /> among common letters therein. <br /> But, with a search you
                find it out <br /> and bet on The Wheel of Fortune.</p>

            {/* <!-- Script For Transition Graphics --> */}
            <Transition />


        </>
    );
}

export function HappyButton() {
    return (
        <Stack spacing={0} direction="row">
            <Button variant="text">☻</Button>
        </Stack>
    );
}