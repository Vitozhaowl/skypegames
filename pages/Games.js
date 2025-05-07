function Games() {
    try {
        const [selectedCategory, setSelectedCategory] = React.useState('all');
        const [searchQuery, setSearchQuery] = React.useState('');

        const games = [
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
                title: "Tactical Force",
                image: "https://images.unsplash.com/photo-1552863473-6e86f6442a18?w=800",
                activePlayers: 789,
                tags: ["Strategy", "Military", "Multiplayer"]
            },
            {
                id: 5,
                title: "Cyber Strike",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
                activePlayers: 2341,
                tags: ["FPS", "Cyberpunk", "Action"]
            },
            {
                id: 6,
                title: "Medieval Kingdoms",
                image: "https://images.unsplash.com/photo-1615672968435-a6b4aa457da3?w=800",
                activePlayers: 945,
                tags: ["Strategy", "Medieval", "MMO"]
            },
            {
                id: 7,
                title: "Pixel Survivors",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
                activePlayers: 1567,
                tags: ["Survival", "Retro", "Indie"]
            },
            {
                id: 8,
                title: "Ocean Explorer",
                image: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800",
                activePlayers: 678,
                tags: ["Adventure", "Exploration", "Casual"]
            },
            {
                id: 9,
                title: "Zombie Defense",
                image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
                activePlayers: 1234,
                tags: ["Horror", "Survival", "Action"]
            }
        ];

        const filteredGames = games.filter(game => {
            const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || game.tags.includes(selectedCategory);
            return matchesSearch && matchesCategory;
        });

        return (
            <div data-name="games-page" className="min-h-screen bg-gray-900 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold text-white mb-8">Games Library</h1>
                    
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Categories</option>
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Sports">Sports</option>
                            <option value="FPS">FPS</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Survival">Survival</option>
                            <option value="Casual">Casual</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Games page error:', error);
        reportError(error);
        return null;
    }
}
