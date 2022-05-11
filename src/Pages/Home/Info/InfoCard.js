import React from 'react';

const InfoCard = ({ icon, classname, header, content }) => {
    return (
        <div className={`card lg:card-side ${classname} shadow-xl px-6 py-8 md:py-3`}>
            <figure><img src={icon} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{header}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default InfoCard;