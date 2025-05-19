import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/cadastro" element={<h1>Cadastro</h1>} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/leads" element={<h1>Leads</h1>} />
        <Route path="/perfil" element={<h1>Perfil</h1>} />
      </Routes>
    </Router>
  )
}

export default App
