function InviteCodeModal({ isOpen, onClose, onSubmit }) {
    try {
        const [inviteCode, setInviteCode] = React.useState('');
        const [error, setError] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!inviteCode.trim()) {
                setError('Please enter an invitation code');
                return;
            }
            onSubmit(inviteCode);
        };

        if (!isOpen) return null;

        return (
            <div data-name="invite-modal" className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="fixed inset-0 bg-black opacity-75"></div>
                    
                    <div className="relative bg-gray-800 rounded-lg max-w-md w-full p-6 shadow-xl">
                        <div className="absolute top-4 right-4">
                            <button 
                                data-name="close-button"
                                onClick={onClose}
                                className="text-gray-400 hover:text-white"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="text-center mb-6">
                            <i className="fas fa-lock text-blue-500 text-4xl mb-4"></i>
                            <h2 className="text-2xl font-bold text-white mb-2">Internal Testing Phase</h2>
                            <p className="text-gray-400">Please enter your invitation code to continue</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={inviteCode}
                                    onChange={(e) => {
                                        setInviteCode(e.target.value);
                                        setError('');
                                    }}
                                    placeholder="Enter invitation code"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {error && (
                                    <p className="text-red-500 text-sm mt-2">{error}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
                            >
                                Submit
                            </button>
                        </form>

                        <p className="text-sm text-gray-400 mt-4 text-center">
                            Need an invitation code? 
                            <a href="#" className="text-blue-500 hover:text-blue-400 ml-1">
                                Request here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('InviteCodeModal error:', error);
        reportError(error);
        return null;
    }
}
