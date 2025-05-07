function App() {
    try {
        const { currentPath } = useRouter();

        const renderPage = () => {
            switch (currentPath) {
                case '/':
                    return <Home />;
                case '/games':
                    return <Games />;
                case '/tournaments':
                    return <Tournaments />;
                case '/leaderboard':
                    return <Leaderboard />;
                default:
                    return <Home />;
            }
        };

        return (
            <div data-name="app" className="min-h-screen bg-gray-900">
                <Navbar />
                {renderPage()}
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
