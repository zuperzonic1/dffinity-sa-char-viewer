import PropTypes from 'prop-types';

const ControlPanel = ({ onReloadClick, isLoading, modelData, textureData }) => (
    <div className="space-y-6 mt-6">
        {/* Action Buttons */}
        <div className="space-y-3">
            <div className="w-full py-3 px-4 text-center">
                {isLoading ? (
                    <div className="flex items-center justify-center space-x-2 text-purple-400">
                        <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="font-medium">Loading...</span>
                    </div>
                ) : modelData && textureData ? (
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-medium">Auto-Loaded</span>
                    </div>
                ) : (
                    <div className="flex items-center justify-center space-x-2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <span>Upload both files to auto-load</span>
                    </div>
                )}
            </div>
            
            <button
                onClick={onReloadClick}
                className="w-full py-3 px-4 bg-slate-600 text-white font-semibold rounded-lg 
                         hover:bg-slate-500 transition-all duration-200
                         flex items-center justify-center space-x-2"
            >
                <span>Reset Viewer</span>
            </button>
        </div>

    </div>
);

ControlPanel.propTypes = {
    onReloadClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    modelData: PropTypes.object,
    textureData: PropTypes.object,
};

export default ControlPanel;
