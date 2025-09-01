import React from 'react';
import { Link } from 'react-router-dom';

const Team1 = () => {

    const teamContent = [
        {
            img:'https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/team-4-copyright-570x696.jpg',
            name: 'Head Coach',
            content: 'Mr. John Carter'
        },
        {
            img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmVtYWxlJTIwYm94aW5nJTIwY29hY2hlcnx8fHx8MTY5NDg1Mzg3MQ&ixlib=rb-4.0.3&q=80&w=400',
            name: 'Fitness Trainer',
            content: 'Ms. Laura Benson'
        },
        {
            img: 'https://rumble.ancorathemes.com/wp-content/uploads/2021/12/team-4-copyright.jpg',
            name: 'Boxing Coach',
            content: 'Mr. Adam Smith'
        },
        {
            img: 'https://gym-store.axiomthemes.com/wp-content/uploads/2020/04/team-6-copyright-840x1025.jpg',
            name: 'Strength Coach',
            content: 'Ms. Alexa Mika'
        }
    ];

    return (
        <section className="agk-team pt-130 pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-50 text-center text-lg-start pf_fadeup">
                            <span className="sub-title">Our Team</span>
                            <h2>Meet Our Expert <br/>
                                Boxing & Fitness Coaches</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {/* Optional Button */}
                    </div>
                </div>
                <div className="row">
                    {teamContent.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="agenko-team-item style-one mb-40 pf_fadeup">
                                <div className="member-image">
                                    <img src={item.img} alt="Team Image"  style={{
                                        minHeight:"300px",
                                        maxHeight:"300px"
                                    }}/>
                                 
                                </div>
                                <div className="member-info">
                                    <span className="position">{item.name}</span>
                                    <h5 className="title">{item.content}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team1;
