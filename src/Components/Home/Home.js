import React, { useEffect, useState } from 'react';

const Home = () => {
    const [home, setHome] = useState([]);
    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    return (
        <div>
            <div className="bg-gray-700 m-4 text-white text-4xl font-bold">
                <h1> Our Total Number of Students:</h1>
                <div className="flex items-center justify-center mt-2">
                    <h1 className="p-4 bg-white text-black m-2">4</h1>
                    <h1 className="p-4 bg-white text-black m-2 ">5</h1>
                    <h1 className="p-4 bg-white text-black m-2 ">6</h1>
                    <h1 className="p-4 bg-white text-black m-2 ">7</h1>
                    <h1 className="p-4 bg-white text-black m-2 ">0</h1>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-4">Our Services Except Regular Class:</h1>
                <div className="grid grid-cols-2 gap-4 bg-gray-200" >
                    {
                        home.map(item => (
                            <div key={item.id}>
                                <div className="rounded overflow-hidden shadow-lg">
                                    <img className="w-full object-scale-down h-48 " src={item.Image} alt="River"></img>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{item.Name}</div>
                                        <p className="text-gray-700 text-base">
                                            {item.Description}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">

                                    </div>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>
        </div>
    );
};

export default Home;