import React from 'react';

const PageTitle = ({children}) => {
    return (
        <div>
            <h3 className='m-10 text-center text-4xl font-bold'>{children}</h3>
        </div>
    );
};

export default PageTitle;