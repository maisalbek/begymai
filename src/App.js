import "./App.css";
import AuthContextProvider from "./components/AuthContextProvider";
import ContextProvider from "./components/ContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ContextProvider>
          <MyRoutes />
        </ContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
