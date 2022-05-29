import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <div>
            <h3 className='m-12 text-center text-2xl font-bold'>{children}</h3>
        </div>
    );
};

export default SectionTitle;