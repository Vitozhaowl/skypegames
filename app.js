function App() {
    try {
        const { currentPath } = useRouter();
        const [isModalOpen, setIsModalOpen] = React.useState(false);

        const handleInviteCodeSubmit = (code) => {
            // Here you would typically validate the code with your backend
            console.log('Submitted code:', code);
            setIsModalOpen(false);
            // Add success notification or further actions here
        };

        const renderPage = () => {
            switch (currentPath) {
                case '/':
                    return <Home onActionClick={() => setIsModalOpen(true)} />;
                case '/games':
                    return <Games onActionClick={() => setIsModalOpen(true)} />;
                case '/tournaments':
                    return <Tournaments onActionClick={() => setIsModalOpen(true)} />;
                case '/leaderboard':
                    return <Leaderboard />;
                default:
                    return <Home onActionClick={() => setIsModalOpen(true)} />;
            }
        };

        return (
            <div data-name="app" className="min-h-screen bg-gray-900">
                <Navbar onLoginClick={() => setIsModalOpen(true)} />
                {renderPage()}
                <InviteCodeModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleInviteCodeSubmit}
                />
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
