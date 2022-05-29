import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://mighty-beach-10745.herokuapp.com/addproduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className='flex mx-auto'>

            <form className='sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl p-6 rounded-lg' id='form' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-xl'>Add Your New Collection</h1>

                <input type="text" name='name' placeholder="Product name" className="input input-bordered w-full mt-3" {...register("name")} />
                <input type="text" name='imgLink' placeholder="Image link" className="input input-bordered w-full my-6" {...register("img")} />
                <input type="number" name='minimum' placeholder="Minimum order" className="input input-bordered w-full mb-3" {...register("minimum_quantity")} />
                <input type="number" name='available' placeholder="Available products" className="input input-bordered w-full mb-3" {...register("quantity")} />
                <input type="number" name='price' placeholder="Price" className="input input-bordered w-full mb-3" {...register('price')} />
                <textarea type="text" name='description' placeholder="Description" className="textarea textarea-bordered w-full mb-3" {...register('short_description')} />
                <input type="submit" value="Add Products" className='btn btn-primary w-full text-white' />
            </form>
        </div>
    );
};

export default AddProduct;