function Navbar() {
    try {
        const { currentPath, navigate } = useRouter();

        return (
            <nav data-name="navbar" className="bg-gray-900 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div data-name="logo" className="flex-shrink-0">
                                <h1 className="text-2xl font-bold text-blue-500" onClick={() => navigate('/')}>Skypegames</h1>
                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a 
                                    data-name="nav-home" 
                                    href="#/"
                                    className={`navbar-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/' ? 'text-white' : ''}`}
                                >
                                    Home
                                </a>
                                <a 
                                    data-name="nav-games" 
                                    href="#/games"
                                    className={`navbar-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/games' ? 'text-white' : ''}`}
                                >
                                    Games
                                </a>
                                <a 
                                    data-name="nav-tournaments" 
                                    href="#/tournaments"
                                    className={`navbar-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/tournaments' ? 'text-white' : ''}`}
                                >
                                    Tournaments
                                </a>
                                <a 
                                    data-name="nav-leaderboard" 
                                    href="#/leaderboard"
                                    className={`navbar-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${currentPath === '/leaderboard' ? 'text-white' : ''}`}
                                >
                                    Leaderboard
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button data-name="login-button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar error:', error);
        reportError(error);
        return null;
    }
}
