import React, { useState , useEffect} from 'react';
import './JoinUs.css';
import Join from './joinus.jpg';
import { useInView } from 'react-intersection-observer';
import JoinButton from './JoinButton';

const JoinUs = () => {
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
                <div className="TextContentJoin" ref={ref}>
                    <div className={`JoinUsText ${isVisible ? 'isVisible' : ''}`}>
                        <h1 className="TextDecoration">Join forces with us in the fight against crime! <br/>
                        Become a developer in our community.</h1>
                        <div className="ButtonJoinCSS">
                            <JoinButton />
                        </div>
                    </div>
                </div>
                <div className="TextContentTwoJoin">
                    <div className="ImgJoin">
                        <img src={Join} alt="Join" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinUs;

