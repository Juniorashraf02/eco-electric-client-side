import React from 'react';

const Blogs = () => {
    return (
        <div className="w-screen mt-20 container mx-auto text-justify">
            <div className="my-5">
                <h1 className="font-semibold">How will you improve the performance of a React Application?</h1>
                <p>
                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                    Keeping component state local where necessary
                    Memoizing React components to prevent unnecessary re-renders
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React
                    Lazy loading images in React
                    React pre-optimization techniques
                    Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.

                    Let’s start by reviewing how the React UI updates.

                    Understanding how React updates its UI
                    When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.

                    It then only updates the changed element in the actual DOM. This process is called diffing.

                    React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.

                    This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if it’s not managed very well.

                    What we can deduce here is that a state change in a React component causes a re-render. Likewise, when the state passes down to a child component as a prop, it re-renders the child and so on, which is fine because React must update the UI.

                    The issue comes when the child components are not affected by the state change. In other words, they do not receive any prop from the parent component.

                    React nonetheless re-renders these child components. So, as long as the parent component re-renders, all of its child components re-render regardless of whether a prop passes to them or not; this is the default behavior of React.
                </p>
            </div>

            <div className="my-5">
                <h1 className="font-semibold">What are the different ways to manage a state in a React application?</h1>
                <p>
                    There are four main types of state you need to properly manage in your React apps:

                    <ul>
                        <li>Local state </li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                    </ul>
                    Let's cover each of these in detail:

                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.

                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className="my-5">
                <h1 className="font-semibold">How does prototypical inheritance work?
                </h1>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                </p>
            </div>

            <div className="my-5">
            <h1 className="font-semibold"> What is a unit test? Why should write unit tests?
                </h1>
                <p>
                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.[2] In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, or an individual method.[3] By writing tests first for the smallest testable units, then the compound behaviors between those, one can build up comprehensive tests for complex applications.[2]

                    To isolate issues that may arise, each test case should be tested independently. Substitutes such as method stubs, mock objects,[4] fakes, and test harnesses can be used to assist testing a module in isolation.
                </p>
            </div>
        </div>
    );
};

export default Blogs;