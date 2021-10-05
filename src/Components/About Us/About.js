import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="flex main">
            <div className="text-2xl">
                <h1 className="x">Our Mission: We want to make Bangladesh more skilled and more competent in Computer Based Works</h1>
                <h1>Office:House No:12, Road No:14, Mothijheel,Dhaka,Bangladesh</h1>
                <div>
                    <h1>Some of Our <span className="font-bold">Respected Teachers</span>:</h1>
                    <div className="grid grid-cols-3 mt-4" >
                        {
                            instructors.map(boss => (
                                <div key={boss.key}>
                                    <div class="rounded overflow-hidden shadow-lg">
                                        <img class="w-full object-scale-down h-48" src={boss.fig} alt="River"></img>
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2">{boss.name}</div>
                                            <p class="text-gray-700 text-base">
                                                {boss.job}
                                            </p>
                                        </div>
                                        <div class="px-6 pt-4 pb-2">

                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default About;