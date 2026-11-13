import { Route, Routes } from 'react-router'
import App from './App'
import HighlightPage from './pages/HighlightPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

/** Connects application URLs to their page components. */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="highlight" element={<HighlightPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
