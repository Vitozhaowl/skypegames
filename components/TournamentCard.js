function TournamentCard({ tournament, onActionClick }) {
    try {
        return (
            <div data-name="tournament-card" className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 data-name="tournament-title" className="text-xl font-bold text-white">{tournament.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                            tournament.status === 'live' ? 'bg-green-500' : 'bg-blue-500'
                        } text-white`}>
                            {tournament.status.toUpperCase()}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{tournament.description}</p>
                    <div className="space-y-3">
                        <p data-name="tournament-game" className="text-gray-400">
                            <i className="fas fa-gamepad mr-2"></i>
                            {tournament.game}
                        </p>
                        <p data-name="tournament-prize" className="text-yellow-500">
                            <i className="fas fa-trophy mr-2"></i>
                            Prize Pool: ${tournament.prizePool.toLocaleString()}
                        </p>
                        <p data-name="tournament-players" className="text-gray-400">
                            <i className="fas fa-users mr-2"></i>
                            {tournament.players.toLocaleString()} Players Registered
                        </p>
                        <p data-name="tournament-date" className="text-gray-400">
                            <i className="fas fa-calendar mr-2"></i>
                            {tournament.date}
                        </p>
                    </div>
                    <button 
                        data-name="login-button" 
                        onClick={onLoginClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                        Join Tournament
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('TournamentCard error:', error);
        reportError(error);
        return null;
    }
}
