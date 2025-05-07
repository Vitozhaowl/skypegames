function Leaderboard() {
    try {
        const players = [
            {
                id: 1,
                username: "GalacticLord",
                avatar: "https://i.pravatar.cc/150?img=1",
                level: 82,
                score: 25000,
                wins: 320,
                winRate: 85
            },
            {
                id: 2,
                username: "MythicChampion",
                avatar: "https://i.pravatar.cc/150?img=2",
                level: 75,
                score: 22500,
                wins: 280,
                winRate: 82
            },
            {
                id: 3,
                username: "SpeedDemon",
                avatar: "https://i.pravatar.cc/150?img=3",
                level: 68,
                score: 21000,
                wins: 250,
                winRate: 80
            },
            {
                id: 4,
                username: "TacticalMaster",
                avatar: "https://i.pravatar.cc/150?img=4",
                level: 77,
                score: 23500,
                wins: 290,
                winRate: 83
            },
            {
                id: 5,
                username: "CyberKnight",
                avatar: "https://i.pravatar.cc/150?img=5",
                level: 65,
                score: 19000,
                wins: 220,
                winRate: 78
            },
            {
                id: 6,
                username: "StrategyKing",
                avatar: "https://i.pravatar.cc/150?img=6",
                level: 70,
                score: 20500,
                wins: 240,
                winRate: 79
            },
            {
                id: 7,
                username: "RogueMaster",
                avatar: "https://i.pravatar.cc/150?img=7",
                level: 63,
                score: 18500,
                wins: 210,
                winRate: 77
            },
            {
                id: 8,
                username: "WastelandHero",
                avatar: "https://i.pravatar.cc/150?img=8",
                level: 80,
                score: 24000,
                wins: 300,
                winRate: 84
            },
            {
                id: 9,
                username: "DeepExplorer",
                avatar: "https://i.pravatar.cc/150?img=9",
                level: 61,
                score: 17500,
                wins: 200,
                winRate: 76
            },
            {
                id: 10,
                username: "BattleLegend",
                avatar: "https://i.pravatar.cc/150?img=10",
                level: 73,
                score: 21500,
                wins: 260,
                winRate: 81
            }
        ];

        return (
            <div data-name="leaderboard-page" className="min-h-screen bg-gray-900 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold text-white mb-8">Global Leaderboard</h1>
                    
                    <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
                        <LeaderboardTable players={players} />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Leaderboard page error:', error);
        reportError(error);
        return null;
    }
}
