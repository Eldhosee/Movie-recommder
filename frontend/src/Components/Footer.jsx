import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="list-none p-0 m-0">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <ul className="list-none p-0 m-0">
                            <li><a href="#"><i className="fab fa-facebook-square"></i> Facebook</a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                        <p>123 Street Name, City</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Newsletter</h4>
                        <p>Subscribe to our newsletter to receive updates and exclusive offers.</p>
                        <form>
                            <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded mt-2 w-auto" />
                            <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>© 2024 FilmFusion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
