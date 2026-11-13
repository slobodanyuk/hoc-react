import './App.css'
import { NavLink, Outlet } from 'react-router'

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <nav className="sidebar-nav" aria-label="Основная навигация">
          <NavLink to="/" end className={({ isActive }) => `sidebar-link${isActive ? ' sidebar-link-active' : ''}`}>
            Публикация
          </NavLink>
          <NavLink
            to="/highlight"
            className={({ isActive }) => `sidebar-link${isActive ? ' sidebar-link-active' : ''}`}>
            Подсветка
          </NavLink>
        </nav>
      </aside>

      <div className="page-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
