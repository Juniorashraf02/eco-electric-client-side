import React from 'react';


const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <section className="bg-blue-400 mt-10">
            <footer className="footer p-10  text-white font-semibold ">
                <div>
                    <span className="footer-title">Available Cupons</span>
                    <a href="#d" className="link link-hover">Montly cupons</a>
                    <a href="#d" className="link link-hover">Weekly cupons</a>
                    <a href="#d" className="link link-hover">Daily deals</a>
                </div>
                <div>
                    <span className="footer-title">Check out our magazines</span>
                    <a href="#d" className="link link-hover">Yearly magazines</a>
                    <a href="#d" className="link link-hover">Montly magazines</a>
                    <a href="#d" className="link link-hover">weekly magazines</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p>United States - Hogword</p>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <p className="text-white font-semibold ">Copyright &copy;{years} All Rights Reserved</p>
        </section>
    );
};

export default Footer;