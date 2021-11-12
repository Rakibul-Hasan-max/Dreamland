import React from 'react';
import { Link } from 'react-router-dom';

const Apartment = ({ apartment }) => {
    const { _id, name, description, price, img } = apartment;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="mt-3">{name}</h3>
            <h3 className="mt-3">{price}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/purchase/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Apartment;
