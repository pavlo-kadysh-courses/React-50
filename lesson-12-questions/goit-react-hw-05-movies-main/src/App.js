import logo from './logo.svg';

import React, { useState, useContext, Suspense, useMemo } from 'react';
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom';
import Header from './components/header';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import MovieDetails from './pages/MovieDetails';
// import SharedLayout from './SharedLayout';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import './App.css';

export const QueryContext = React.createContext();

const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));
const SharedLayout = React.lazy(() => import('./SharedLayout'));
function App() {
  const [state, setState] = useState([]);
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <Header />
      <QueryContext.Provider value={{ state, setState }}>
        <Suspense fallback={<div>Завантаження...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="../*" element={<Navigate to="/goit-react-hw-05-movies" />} />
            </Route>
          </Routes>
        </Suspense>
      </QueryContext.Provider>
    </div>
  );
}

export default App;
