import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DCPage, MarvelPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container"> 

          <Routes>
            <Route path="marvel" element={<MarvelPage />} /> 
            <Route path="dc"     element={<DCPage />} /> 

            {/* search, Hero by id */}
            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id"   element={<HeroPage />} />

            <Route path="/"      element={<Navigate to="/" />} />

          </Routes>
        </div>

    </>
  )
}
