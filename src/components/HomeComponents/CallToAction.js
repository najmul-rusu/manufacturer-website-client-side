import React from 'react';
import Shipping from '../../assets/images/icon/icon-1.png'
import Quality from '../../assets/images/icon/icon-2.png'
import Support from '../../assets/images/icon/icon-3.png'

const CallToAction = () => {
    return (
        <div className='lg:p-12 grid lg:grid-cols-3 grid-cols-1 my-10'>
            <div className='flex lg:border-r-2 pl-10 m-5'>
                <div className='pt-5 '>
                    <img src={Shipping} alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-2xl font-bold'>Free Shipping</h3>
                    <p>Provide free home delivery for all product over $500</p>
                </div>
            </div>
            <div className='flex lg:border-r-2 pl-10 m-5'>
                <div className='pt-5'>
                    <img src={Quality} alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-2xl font-bold'>Quality Products</h3>
                    <p>We ensure our product quality all times</p>
                </div>
            </div>
            <div className='flex pl-10 m-5'>
                <div className='pt-5'>
                    <img src={Support} alt="" />
                </div>
                <div className='pl-5'>
                    <h3 className='text-2xl font-bold'>Online Support</h3>
                    <p>To satisfy our customer we try to give support online</p>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;