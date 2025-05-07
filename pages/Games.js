function Games() {
    try {
        const [selectedCategory, setSelectedCategory] = React.useState('all');
        const [searchQuery, setSearchQuery] = React.useState('');

        const games = [
            {
                id: 1,
                title: "Galactic Conquest",
                image: "https://images.unsplash.com/photo-1614285457768-646f65ca8548?w=800",
                activePlayers: 3421,
                tags: ["Strategy", "Space", "MMO"],
                description: "Build your empire across the galaxy"
            },
            {
                id: 2,
                title: "Mythic Legends",
                image: "https://images.unsplash.com/photo-1642416379127-62excb2d1562?w=800",
                activePlayers: 2856,
                tags: ["RPG", "Fantasy", "PvP"],
                description: "Epic fantasy MMORPG with intense PvP"
            },
            {
                id: 3,
                title: "Velocity Rush",
                image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800",
                activePlayers: 1567,
                tags: ["Racing", "Sports", "Competitive"],
                description: "High-speed racing with futuristic vehicles"
            },
            {
                id: 4,
                title: "Special Ops Elite",
                image: "https://images.unsplash.com/photo-1552863473-6e86f6442a18?w=800",
                activePlayers: 4789,
                tags: ["FPS", "Military", "Team"],
                description: "Tactical team-based military shooter"
            },
            {
                id: 5,
                title: "Cyber Revolution",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
                activePlayers: 5341,
                tags: ["Action", "Cyberpunk", "RPG"],
                description: "Open-world cyberpunk action RPG"
            },
            {
                id: 6,
                title: "Kingdom Wars",
                image: "https://images.unsplash.com/photo-1615672968435-a6b4aa457da3?w=800",
                activePlayers: 2945,
                tags: ["Strategy", "Medieval", "PvP"],
                description: "Medieval strategy with massive battles"
            },
            {
                id: 7,
                title: "Rogue Legacy",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
                activePlayers: 1867,
                tags: ["Roguelike", "Action", "RPG"],
                description: "Procedurally generated dungeon crawler"
            },
            {
                id: 8,
                title: "Deep Dive",
                image: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800",
                activePlayers: 1678,
                tags: ["Adventure", "Exploration", "Story"],
                description: "Underwater exploration adventure"
            },
            {
                id: 9,
                title: "Wasteland Survivors",
                image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
                activePlayers: 3234,
                tags: ["Survival", "Open World", "Multiplayer"],
                description: "Post-apocalyptic survival MMO"
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
                            <option value="FPS">FPS</option>
                            <option value="Racing">Racing</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Survival">Survival</option>
                            <option value="MMO">MMO</option>
                            <option value="PvP">PvP</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredGames.map(game => (
                            <GameCard key={game.id} game={game} onActionClick={() => onActionClick()} />
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
