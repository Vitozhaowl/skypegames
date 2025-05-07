function Tournaments() {
    try {
        const tournaments = [
            {
                id: 1,
                title: "Galactic Conquest Championship",
                game: "Galactic Conquest",
                status: "live",
                prizePool: 25000,
                players: 256,
                date: "Live Now",
                description: "The ultimate space strategy showdown"
            },
            {
                id: 2,
                title: "Mythic Legends World Cup",
                game: "Mythic Legends",
                status: "upcoming",
                prizePool: 50000,
                players: 512,
                date: "Starts in 2 days",
                description: "Global PvP championship"
            },
            {
                id: 3,
                title: "Velocity Rush Grand Prix",
                game: "Velocity Rush",
                status: "upcoming",
                prizePool: 15000,
                players: 128,
                date: "Starts in 5 days",
                description: "High-stakes racing tournament"
            },
            {
                id: 4,
                title: "Special Ops Elite League",
                game: "Special Ops Elite",
                status: "live",
                prizePool: 35000,
                players: 320,
                date: "Live Now",
                description: "Professional tactical team competition"
            },
            {
                id: 5,
                title: "Cyber Revolution Masters",
                game: "Cyber Revolution",
                status: "upcoming",
                prizePool: 20000,
                players: 256,
                date: "Starts in 1 week",
                description: "Solo cyberpunk championship"
            },
            {
                id: 6,
                title: "Kingdom Wars Siege Masters",
                game: "Kingdom Wars",
                status: "upcoming",
                prizePool: 30000,
                players: 128,
                date: "Starts in 3 days",
                description: "Medieval strategy tournament"
            },
            {
                id: 7,
                title: "Rogue Legacy Challenge",
                game: "Rogue Legacy",
                status: "upcoming",
                prizePool: 10000,
                players: 64,
                date: "Starts in 6 days",
                description: "Speedrunning competition"
            },
            {
                id: 8,
                title: "Wasteland Survivors Battle Royale",
                game: "Wasteland Survivors",
                status: "live",
                prizePool: 40000,
                players: 1000,
                date: "Live Now",
                description: "Massive survival tournament"
            }
        ];

        return (
            <div data-name="tournaments-page" className="min-h-screen bg-gray-900 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-white">Tournaments</h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Create Tournament
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tournaments.map(tournament => (
                            <TournamentCard key={tournament.id} tournament={tournament} onActionClick={() => onActionClick()} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Tournaments page error:', error);
        reportError(error);
        return null;
    }
}
