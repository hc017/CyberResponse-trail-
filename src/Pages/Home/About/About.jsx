import React, { useState , useEffect} from 'react';
import '../JoinUs/JoinUs.css';
import { useInView } from 'react-intersection-observer';
import AboutP from './about.jpg' 
import JoinButton from '../JoinUs/JoinButton';
import LearnMore from './LearnMore';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger animation when 50% of the element is visible
    });

    // Set isVisible to true when the component enters the viewport
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [inView]);

    return (
        <div className="JoinUsContainer">
            <div className="CombineText">
                <div className="TextContentTwoJoin">
                    <div className="ImgJoin">
                        <img src={AboutP} alt="About" />
                    </div>
                </div>
                <div className="AboutTextContentJoin" ref={ref}>
                    <div className={`AboutUsText ${isVisible ? 'isVisible' : ''}`}>
                        <h1 className="TextDecoration">About CyberSecurity</h1>
                        
                        
                       
                        <p className="ParaDecoration">Cybersoochna is your automated incident response partner, revolutionizing cybersecurity with intelligent incident categorization and seamless collaboration. Empowering teams to swiftly prioritize and mitigate threats, Cybersoochna streamlines incident workflows, enhances situational awareness, and fortifies organizational resilience in the face of evolving cyber challenges. Experience efficient incident response like never before with Cybersoochna</p>
                        <br/>
                        <br/>
                <LearnMore/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;
