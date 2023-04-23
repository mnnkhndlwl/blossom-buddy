import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
        {/* <Newsletter />
        <Footer /> */}
      </BrowserRouter>
    </div>
    </ChakraProvider>
  );
}

export default App;
