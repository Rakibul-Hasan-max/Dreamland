// import React from 'react';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
// import './AddService.css';

// const AddProperties = () => {
    
//     const { register, handleSubmit, reset } = useForm();
//     const onSubmit = data => {
//         console.log(data);
//         axios.post('https://mighty-hamlet-29284.herokuapp.com/services', data)
//             .then(res => {
//                 if(res.data.insertedId){
//                     alert('added successfully');
//                     reset();
//                 }
//             })
//     }

//     return (
//         <div className="add-service">
//             <h1 className="text-primary">Add a Service</h1>
//             <p>Discover your next great adventure, become an explorer to get started!</p>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("name", { required: true, maxLength: 100 })} placeholder="name" />
//                 <textarea {...register("description")} placeholder="description" />
//                 <input {...register("img")} placeholder="image url" />
//                 <input className="btn btn-success" type="submit" />
//             </form>
//         </div>
//     );
// };

// export default AddProperties;

import React from 'react';
import { useForm } from "react-hook-form";
import './AddProperties.css';

const AddProperties = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="form-style">
            <h1>Add a Properties</h1>
            <p>Our distinctive buildings fill the skyline and street scapes of the city!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProperties;