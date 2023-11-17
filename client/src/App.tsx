import Router from "@pages/Router";
import { AuthContextProvider } from "@atoms/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
