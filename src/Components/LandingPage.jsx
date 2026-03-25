import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate('/viewer');
  };

  const features = [
    {
      icon: '📁',
      title: 'DFF File Support',
      description: 'Load and view GTA San Andreas DFF model files.'
    },
    {
      icon: '🎨',
      title: 'TXD Textures',
      description: 'Apply TXD texture files to your models.'
    },
    {
      icon: '🔄',
      title: '3D Viewer',
      description: 'Interactive 3D rendering with camera controls.'
    },
    {
      icon: '⚙️',
      title: 'View Options',
      description: 'Wireframe mode and display settings.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Upload DFF',
      description: 'Select your DFF model file',
      icon: '📂'
    },
    {
      number: '2',
      title: 'Add TXD',
      description: 'Optionally add a TXD texture file',
      icon: '🎨'
    },
    {
      number: '3',
      title: 'View Model',
      description: 'Rotate, zoom, and explore in 3D',
      icon: '🔄'
    }
  ];

  const controls = [
    { action: 'Left Click + Drag', result: 'Rotate camera' },
    { action: 'Right Click + Drag', result: 'Pan camera' },
    { action: 'Scroll Wheel', result: 'Zoom in/out' },
  ];

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl w-full"
        >
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/DFFinity-logo.png"
              alt="DFFinity Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              DFFinity
            </h1>
            <p className="text-white/60 text-base sm:text-lg lg:text-xl font-medium">
              GTA San Andreas Model Viewer
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-4 leading-relaxed px-4">
              View GTA San Andreas models in 3D. Upload DFF and TXD files to visualize game assets.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/50 px-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                DFF Support
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                TXD Support
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                3D Rendering
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartNow}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
            >
              Start Now →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('how-to-use')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl text-white font-semibold text-base sm:text-lg backdrop-blur-sm transition-all"
            >
              Learn More ↓
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Features
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Simple viewer for GTA San Andreas DFF and TXD files
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div id="how-to-use" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How to Use
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Get started in 3 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sample Files */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📦</span> Sample Files
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              Download these sample files to try out the viewer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/truth.dff"
                download="truth.dff"
                className="flex-1 flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📁</span>
                  <div>
                    <div className="text-white font-medium text-sm">truth.dff</div>
                    <div className="text-white/50 text-xs">Model File</div>
                  </div>
                </div>
                <span className="text-white/50 group-hover:text-white transition-colors">↓</span>
              </a>
              <a
                href="/truth.txd"
                download="truth.txd"
                className="flex-1 flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <div className="text-white font-medium text-sm">truth.txd</div>
                    <div className="text-white/50 text-xs">Texture File</div>
                  </div>
                </div>
                <span className="text-white/50 group-hover:text-white transition-colors">↓</span>
              </a>
            </div>
          </motion.div>

          {/* Controls Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🖱️</span> Mouse Controls
            </h3>
            <div className="space-y-3">
              {controls.map((control, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-white font-medium text-sm">{control.action}</span>
                  <span className="text-white/50 text-sm">{control.result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Upload your DFF and TXD files to view GTA San Andreas models in 3D.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartNow}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
            >
              Launch Viewer →
            </motion.button>
            
            <div className="flex flex-col items-center gap-2 mt-8">
              <a 
                href="https://github.com/zuperzonic1/dffinity-sa-char-viewer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">View on GitHub</span>
              </a>
              
              <p className="text-white/30 text-xs text-center px-4">
                <span className="opacity-70">Special thanks to</span> <a href="https://github.com/Timic3/rw-parser" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/50 hover:text-white/80 transition-colors underline decoration-white/10 hover:decoration-white/30 underline-offset-2">rw-parser</a> <span className="opacity-70">by Timic3 for DFF/TXD parsing</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
