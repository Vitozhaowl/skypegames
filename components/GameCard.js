function GameCard({ game, onActionClick }) {
    try {
        return (
            <div data-name="game-card" className="game-card bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img 
                    data-name="game-image"
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 data-name="game-title" className="text-lg font-semibold text-white">{game.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{game.description}</p>
                    <p data-name="game-players" className="text-sm text-gray-400 mt-2">
                        <i className="fas fa-users mr-2"></i>
                        {game.activePlayers.toLocaleString()} Players Online
                    </p>
                    <div data-name="game-tags" className="flex flex-wrap gap-2 mt-2">
                        {game.tags.map((tag, index) => (
                            <span 
                                key={index}
                                className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button 
                        data-name="play-button"
                        onClick={onActionClick}
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
                    >
                        Play Now
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('GameCard error:', error);
        reportError(error);
        return null;
    }
}
