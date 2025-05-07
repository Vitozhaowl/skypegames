function FeaturedGames() {
    try {
        const featuredGames = [
            {
                id: 1,
                title: "Space Warriors",
                image: "https://images.unsplash.com/photo-1614285457768-646f65ca8548?w=800",
                activePlayers: 1234,
                tags: ["Action", "Multiplayer", "Space"]
            },
            {
                id: 2,
                title: "Dragon Quest Online",
                image: "https://images.unsplash.com/photo-1642416379127-62excb2d1562?w=800",
                activePlayers: 856,
                tags: ["RPG", "Fantasy", "Adventure"]
            },
            {
                id: 3,
                title: "Racing Evolution",
                image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800",
                activePlayers: 567,
                tags: ["Racing", "Sports", "Competitive"]
            },
            {
                id: 4,
                title: "Cyber Strike",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
                activePlayers: 2341,
                tags: ["FPS", "Cyberpunk", "Action"]
            },
            {
                id: 5,
                title: "Medieval Kingdoms",
                image: "https://images.unsplash.com/photo-1615672968435-a6b4aa457da3?w=800",
                activePlayers: 945,
                tags: ["Strategy", "Medieval", "MMO"]
            },
            {
                id: 6,
                title: "Pixel Survivors",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
                activePlayers: 1567,
                tags: ["Survival", "Retro", "Indie"]
            }
        ];

        return (
            <section data-name="featured-games" className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="section-title" className="text-3xl font-bold text-white mb-8">Featured Games</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FeaturedGames error:', error);
        reportError(error);
        return null;
    }
}
