import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Lazy load components for better performance
const LandingPage = lazy(() => import("./Components/LandingPage"));
const ModelViewer = lazy(() => import("./Components/ModelViewer"));

function App() {
  // Loading fallback
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/70 text-sm">Loading DFFinity...</p>
      </div>
    </div>
  );

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/viewer" 
            element={
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <ModelViewer />
              </div>
            } 
          />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;