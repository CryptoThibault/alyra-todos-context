import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"
import { DarkModeContext } from "./context/DarkModeContext"

function App() {
  return (
    <DarkModeContext.Provider>
      <ColorModeContainer>
        <div className="container my-4">
          <h1 className="text-center">ToDos App</h1>
          <Todos />
        </div>
      </ColorModeContainer>
    </DarkModeContext.Provider>
  )
}

export default App
