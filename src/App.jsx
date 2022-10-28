import { Home } from './pages/Home/Home'
import './App.css'
import { ChannelMenu } from './components/ChannelMenu/ChannelMenu'

function App() {
  return (
    <div className="App">
      <ChannelMenu />
      <Home />
    </div>
  )
}

export default App
