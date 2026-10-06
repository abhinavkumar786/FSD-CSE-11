import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="counter" element={<Counter />} />
          <Route path="stopwatch" element={<h1>StopWatch App</h1>} />
          <Route path="store" element={<h1>Shopping App</h1>} />
          <Route path="login" element={<h1>Login Page</h1>} />
          <Route path="*" element={<h1>Error: Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;