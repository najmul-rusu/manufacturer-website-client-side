import React from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../../components/Title/PageTitle';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);
        const url=`http://localhost:5000/addproduct`;
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <>
        <PageTitle>Add Product</PageTitle>
        <div className='flex justify-center  items-center my-10 grid lg:grid-cols-2 px-12'>
            <div>
                <img src="https://i.ibb.co/wYwpmdF/image-2022-05-27-T19-11-16-023-Z.png" alt="" />
            </div>
            <div>
            <form className='sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl p-6 rounded-lg' id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-xl font-bold'>New Products can help to grow more connection</h1>
            <small>It's time to launch a powerfull Product</small>
            <input type="text" name='name' placeholder="Product name" className="input input-bordered w-full mt-3" {...register("name")} />
            <input type="text" name='imgLink' placeholder="Image link" className="input input-bordered w-full my-6" {...register("picture")}/>
            <input type="number" name='minimum' placeholder="Minimum order" className="input input-bordered w-full mb-3" {...register("minimum_quantity")} />
            <input type="number" name='available' placeholder="Available products" className="input input-bordered w-full mb-3" {...register("quantity")} />
            <input type="number" name='price' placeholder="Price" className="input input-bordered w-full mb-3" {...register('price')} />
            <textarea type="text" name='description' placeholder="Description" className="textarea textarea-bordered w-full mb-3" {...register('description')}/>
            <input type="submit" value="Add Products" className='btn bg-primary font-bold border-none w-full text-white'/>
            </form>
            </div>
            
        </div>
        </>
    );
};

export default AddProduct;