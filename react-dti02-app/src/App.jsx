import Wow from './Wow.jsx'
import { Footer } from './Footer.jsx'

function App() {
  return (
    <>
      <Wow />
      <Hi />
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <Hi />
      <Wow />
      <Footer />
    </>
  )
}

function Hi() {
  return (
    <>
      <h3>Hi Hi Hi</h3>
    </>
  )
}

export default App