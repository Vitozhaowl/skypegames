function PlayersList() {
    try {
        const players = [
            {
                id: 1,
                username: "ProGamer123",
                avatar: "https://i.pravatar.cc/150?img=1",
                level: 42,
                status: "online"
            },
            {
                id: 2,
                username: "PixelWarrior",
                avatar: "https://i.pravatar.cc/150?img=2",
                level: 38,
                status: "online"
            },
            {
                id: 3,
                username: "GameMaster",
                avatar: "https://i.pravatar.cc/150?img=3",
                level: 55,
                status: "offline"
            }
        ];

        return (
            <section data-name="players-list" className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="section-title" className="text-2xl font-bold text-white mb-8">Top Players</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {players.map(player => (
                            <div
                                key={player.id}
                                data-name={`player-${player.username}`}
                                className="player-card bg-gray-800 rounded-lg p-4 flex items-center space-x-4"
                            >
                                <img
                                    src={player.avatar}
                                    alt={player.username}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="text-white font-medium">{player.username}</h3>
                                    <p className="text-gray-400 text-sm">Level {player.level}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className={`inline-block w-3 h-3 rounded-full ${
                                        player.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                                    }`}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('PlayersList error:', error);
        reportError(error);
        return null;
    }
}
