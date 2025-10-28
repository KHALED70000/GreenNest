import { useEffect, useState } from "react";

const PlantCareTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("/Caretips.json")
            .then(res => res.json())
            .then(data => setTips(data))
            .catch(err => console.error("Error fetching JSON:", err));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map(tip => (
                <div
                    key={tip.tipId}
                    className="bg-green-50 p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                    <div className="text-4xl mb-2 flex flex-col items-center">{tip.icon} <span className="text-black mt-2">{tip.title}</span></div>
                    <h3 className="font-bold text-lg mb-1">{tip.title}</h3>
                    <p className="text-gray-700 underline">{tip.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PlantCareTips;
