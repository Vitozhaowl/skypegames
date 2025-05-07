function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-lg font-semibold text-white mb-4">About Skypegames</h3>
                            <p className="text-gray-400 text-sm">
                                Your ultimate destination for multiplayer gaming entertainment.
                                Join millions of players worldwide.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Games</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Tournaments</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Leaderboard</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Support</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-social">
                            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-discord text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div data-name="footer-newsletter">
                            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Skypegames. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer error:', error);
        reportError(error);
        return null;
    }
}
