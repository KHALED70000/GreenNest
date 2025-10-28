import { useEffect, useState } from "react";

const GreenExperts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch("/experts.json")
            .then(res => res.json())
            .then(data => setExperts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <h2 className='font-bold text-5xl text-center mt-20 mb-8 max-[600px]:mt-8 max-[600px]:text-[30px]'>Meet Our Green Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {experts.map(expert => (
                    <div
                        key={expert.expertId}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                    >
                        <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-black"><span className="text-pink-500">Name: </span>{expert.name}</h3>
                            <p className="text-sm text-blue-600"><span className="text-green-500 font-semibold">Specialized In: </span> {expert.specialization}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GreenExperts;
