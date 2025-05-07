function Leaderboard() {
    try {
        const players = [
            {
                id: 1,
                username: "ProGamer123",
                avatar: "https://i.pravatar.cc/150?img=1",
                level: 42,
                score: 15000,
                wins: 150,
                winRate: 75
            },
            {
                id: 2,
                username: "PixelWarrior",
                avatar: "https://i.pravatar.cc/150?img=2",
                level: 38,
                score: 12500,
                wins: 120,
                winRate: 68
            },
            {
                id: 3,
                username: "GameMaster",
                avatar: "https://i.pravatar.cc/150?img=3",
                level: 55,
                score: 18000,
                wins: 200,
                winRate: 80
            },
            {
                id: 4,
                username: "CyberNinja",
                avatar: "https://i.pravatar.cc/150?img=4",
                level: 47,
                score: 16500,
                wins: 180,
                winRate: 78
            },
            {
                id: 5,
                username: "SpeedRunner",
                avatar: "https://i.pravatar.cc/150?img=5",
                level: 35,
                score: 11000,
                wins: 95,
                winRate: 65
            },
            {
                id: 6,
                username: "StrategyKing",
                avatar: "https://i.pravatar.cc/150?img=6",
                level: 50,
                score: 17000,
                wins: 190,
                winRate: 82
            },
            {
                id: 7,
                username: "QuestHunter",
                avatar: "https://i.pravatar.cc/150?img=7",
                level: 33,
                score: 9500,
                wins: 85,
                winRate: 62
            },
            {
                id: 8,
                username: "LegendaryPlayer",
                avatar: "https://i.pravatar.cc/150?img=8",
                level: 60,
                score: 20000,
                wins: 250,
                winRate: 85
            },
            {
                id: 9,
                username: "PixelPirate",
                avatar: "https://i.pravatar.cc/150?img=9",
                level: 41,
                score: 13500,
                wins: 130,
                winRate: 70
            },
            {
                id: 10,
                username: "BattleMaster",
                avatar: "https://i.pravatar.cc/150?img=10",
                level: 45,
                score: 14500,
                wins: 160,
                winRate: 73
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
