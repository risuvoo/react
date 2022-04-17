import { Route, Routes } from 'react-router-dom';
import AuthMiddleware from './Components/PrivateRouteConcept/AuthMiddleware';
import Dashboard from './Components/PrivateRouteConcept/Dashboard';
import Home from './Components/PrivateRouteConcept/Home';
import Login from './Components/PrivateRouteConcept/Login';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<AuthMiddleware />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}
