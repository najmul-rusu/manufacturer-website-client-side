import React from 'react';

const Blog = () => {
    return (

        <div className="m-12 ">
            <h1 className="text-center py-4 text-primary text-4xl font-bold">
                Blogs{" "}
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4">
                <div className="card lg:w-full bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            What are the different ways to manage a state in a React application?
                        </h2>
                        <p>
                            <b>
                                There are four main types of state you need to properly manage
                                in your React apps:
                            </b> <br />
                            1. Local state <br />
                            2. Global state <br />
                            3. Server state <br />
                            4. URL state
                        </p>
                    </div>
                </div>
                <div className="card lg:w-full bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title  font-bold">
                            What is a unit test? Why should write unit tests?
                        </h2>
                        <p>
                            Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                        </p>
                    </div>
                </div>
                <div className="card lg:w-full bg-base-100 shadow-xl ">
                    <div className="card-body  ">
                        <h2 className="card-title font-bold">How will you improve the performance of a React Application?</h2>
                        <p>
                            1. Keeping component state local where necessary. <br />
                            2. Memoizing React components to prevent unnecessary re-renders. <br />
                            3. Code-splitting in React using dynamic import() <br />
                            4. Windowing or list virtualization in React. <br />
                            5. Lazy loading images in React.
                        </p>
                    </div>
                </div>
                <div className="card lg:w-full bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title  font-bold">
                            How does prototypical inheritance work?
                        </h2>
                        <p>
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </div>
                </div>
                <div className="card lg:w-full bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title font-bold">
                            {" "}
                            Why you do not set the state directly in React?
                        </h2>
                        <p>
                            <b>One should never update the state directly because of the following reasons:</b> <br />
                            1. If you update it directly, calling the setState() afterward may just replace the update you made. <br />
                            2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br />
                            3. You will lose control of the state across all components.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Blog;