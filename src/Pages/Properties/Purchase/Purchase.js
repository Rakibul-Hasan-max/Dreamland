import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {console.log(data)};

    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/properties`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Details of the properties</h2>
            <h2>This is booking: {serviceId}</h2>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                 <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />                 <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                 {errors.email && <span className="error">This field is required</span>}
                 <input placeholder="Phone number" defaultValue="" {...register("phone")} />
                 <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="Zip code" defaultValue="" {...register("zip code")} />
                <input className="submit" type="submit" />
             </form>
        </div>
    );
};

export default Purchase;
