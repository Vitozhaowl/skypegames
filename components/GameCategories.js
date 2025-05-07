function GameCategories() {
    try {
        const categories = [
            { id: 1, name: "Action", icon: "fa-gamepad" },
            { id: 2, name: "Strategy", icon: "fa-chess" },
            { id: 3, name: "Sports", icon: "fa-football" },
            { id: 4, name: "Racing", icon: "fa-car" },
            { id: 5, name: "RPG", icon: "fa-dragon" },
            { id: 6, name: "Puzzle", icon: "fa-puzzle-piece" }
        ];

        return (
            <section data-name="game-categories" className="py-12 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="section-title" className="text-2xl font-bold text-white mb-8">Game Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map(category => (
                            <div
                                key={category.id}
                                data-name={`category-${category.name.toLowerCase()}`}
                                className="category-item bg-gray-800 rounded-lg p-4 text-center cursor-pointer"
                            >
                                <i className={`fas ${category.icon} category-icon text-2xl text-blue-500 mb-2`}></i>
                                <h3 className="text-white font-medium">{category.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('GameCategories error:', error);
        reportError(error);
        return null;
    }
}
