import React, { useEffect } from 'react';
import { useState } from 'react';

const Feedback = () => {
    const [students, setStudent] = useState([]);
    useEffect(() => {
        fetch('./Feedback.JSON')
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold mb-4 ">Meet Some of Our Ex-Students:</h1>
                <div className="grid grid-cols-2 gap-4 bg-gray-200 " >
                    {
                        students.map(student => (
                            <div key={student.key}>
                                <div className="rounded overflow-hidden shadow-lg">
                                    <img className="w-full object-scale-down h-48 " src={student.fig} alt="River"></img>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{student.name}</div>
                                        <p className="text-gray-700 text-base">
                                            {student.feedback}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <h5>Email:{student.email}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>
        </div>
    )
};

export default Feedback;