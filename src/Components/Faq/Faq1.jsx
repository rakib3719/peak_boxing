import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/images/process.jpg'

const Faq1 = () => {

    const faqContent = [
        {
            title: 'What types of training programs do you offer?',
            content: 'We offer a variety of programs including boxing, strength training, cardio workouts, personal training, and group fitness classes suitable for all levels.'
        },
        {
            title: 'Do I need prior boxing or gym experience?',
            content: 'Not at all! Our programs are designed for beginners as well as advanced athletes. Coaches will guide you step by step based on your fitness level.'
        },
        {
            title: 'What equipment should I bring for training?',
            content: 'Basic gym wear, boxing gloves, and wraps are recommended. If you don’t have them, our gym store offers high-quality gear for purchase.'
        },
        {
            title: 'How long does it take to see results?',
            content: 'Results vary depending on your goals and consistency, but most members notice improvements in fitness, strength, and stamina within 4-6 weeks.'
        },
        {
            title: 'Do you offer personal training sessions?',
            content: 'Yes, we provide one-on-one personal training where our coaches design customized plans to help you achieve specific fitness and boxing goals.'
        },
        {
            title: 'Is there a trial class available?',
            content: 'Yes! We offer a free trial class so you can experience our training environment and coaching style before committing to a membership.'
        },
    ]; 

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    const handleItemClick = index => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };
    useEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);

    return (
        <section className="agk-faq pt-130 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">FAQ</span>
                            <h2>Got Questions? We’ve Got Answers</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="" style={

                            {
                                fontSize:"42px",
                                fontWeight:"600"
                            }
                        }>Faq’s</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="agk-image-box mb-50 pf_fadeup">
                            <div className="agk-image">
                                <img src={image} alt="faq image" style={{ marginTop:"24px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="agk-content-box mb-30">
                            <div className="agk-accordion" id="accordionOne">
                                {faqContent.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} 
                                    >
                                        <div onClick={() => handleItemClick(index)} className="accordion-header">
                                            <h6 className="accordion-title" aria-expanded={index === openItemIndex}>
                                                {item.title}
                                            </h6>
                                        </div>
                                        {index === openItemIndex && (
                                            <div ref={accordionContentRef} className="accordion-collapse accordion-content">
                                                <div className="accordion-content">
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;
