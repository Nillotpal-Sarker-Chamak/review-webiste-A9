import React, { useEffect, useState } from 'react';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="grid grid-cols-3 gap-4 bg-gray-200" >
            {
                services.map(service => (
                    <div key={service.id}  >
                        <div className="rounded overflow-hidden shadow-lg">
                            <img className="w-full object-fill h-48" src={service.Image} alt="River"></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{service.Name}</div>
                                <p className="text-gray-700 text-base">
                                    {service.Description}
                                </p>
                                <h1 className="font-bold text-xl mb-2">Duration:{service.Duration}</h1>
                                <h2 className="font-semibold text-xl mb-2">Assignement:{service.Assignements}</h2>
                                <h2 className="text-gray-700 text-base">{service.Type}</h2>
                                <h2 className="font-semibold  mb-2">Price:{service.Price}</h2>
                                <button className="rounded-full font-bold bg-purple-600 bg-opacity-75  p-4 border-4">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                )
                )}
        </div>
    );
};

export default Services;