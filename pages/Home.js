function Home() {
    try {
        return (
            <div data-name="home-page">
                <main>
                    <section data-name="hero" className="relative bg-gray-900 py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block">Welcome to</span>
                                    <span className="block text-blue-500">Skypegames</span>
                                </h1>
                                <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Join millions of players worldwide in the ultimate multiplayer gaming experience.
                                </p>
                                
            
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <FeaturedGames />
                    <GameCategories />
                    <PlayersList />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
