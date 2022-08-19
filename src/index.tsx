import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import { routes } from 'utils/router'
import App from './App'
import GlobalStyles from 'components/app/GlobalStyles'
// Cached
const root = createRoot(
  document.getElementById('root')
)
// Render
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
    <GlobalStyles />
  </React.StrictMode>
)