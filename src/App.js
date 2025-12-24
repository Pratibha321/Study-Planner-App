import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Planner from './pages/Planner';
import Progress from './pages/Progress';
import Dashboard from './pages/Dashboard';

function App() {
return (
<BrowserRouter>
<Navbar />
<div style={{ padding: '24px' }}>
<Routes>
<Route path="/" element={<Navigate to="/dashboard" />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/planner" element={<Planner />} />
<Route path="/progress" element={<Progress />} />
</Routes>
</div>
</BrowserRouter>
);
}


export default App;