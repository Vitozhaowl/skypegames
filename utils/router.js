const routes = {
    '/': 'home',
    '/games': 'games',
    '/tournaments': 'tournaments',
    '/leaderboard': 'leaderboard'
};

function useRouter() {
    const [currentPath, setCurrentPath] = React.useState(window.location.hash.slice(1) || '/');

    React.useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash.slice(1) || '/');
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigate = (path) => {
        window.location.hash = path;
    };

    return { currentPath, navigate };
}
