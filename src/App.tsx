
import './App.css'
import InstallPrompt from './test'

function App() {

  return (
     <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>My React PWA Test</h1>
      <p>Try installing this app to your home screen!</p>
      <InstallPrompt />
    </div>
  )
}

export default App
