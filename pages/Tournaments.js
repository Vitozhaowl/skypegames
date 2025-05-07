function Tournaments() {
    try {
        const tournaments = [
            {
                id: 1,
                title: "Space Warriors Championship",
                game: "Space Warriors",
                status: "live",
                prizePool: 10000,
                players: 128,
                date: "Live Now"
            },
            {
                id: 2,
                title: "Dragon Quest League",
                game: "Dragon Quest Online",
                status: "upcoming",
                prizePool: 5000,
                players: 64,
                date: "Starts in 2 days"
            },
            {
                id: 3,
                title: "Racing Evolution Cup",
                game: "Racing Evolution",
                status: "upcoming",
                prizePool: 7500,
                players: 32,
                date: "Starts in 5 days"
            },
            {
                id: 4,
                title: "Cyber Strike Masters",
                game: "Cyber Strike",
                status: "live",
                prizePool: 15000,
                players: 256,
                date: "Live Now"
            },
            {
                id: 5,
                title: "Medieval Tournament",
                game: "Medieval Kingdoms",
                status: "upcoming",
                prizePool: 8000,
                players: 128,
                date: "Starts in 1 week"
            },
            {
                id: 6,
                title: "Pixel Survivors Challenge",
                game: "Pixel Survivors",
                status: "upcoming",
                prizePool: 3000,
                players: 64,
                date: "Starts in 3 days"
            },
            {
                id: 7,
                title: "Ocean Explorer Competition",
                game: "Ocean Explorer",
                status: "upcoming",
                prizePool: 2500,
                players: 32,
                date: "Starts in 6 days"
            },
            {
                id: 8,
                title: "Zombie Defense League",
                game: "Zombie Defense",
                status: "live",
                prizePool: 5000,
                players: 128,
                date: "Live Now"
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
                            <TournamentCard key={tournament.id} tournament={tournament} />
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
