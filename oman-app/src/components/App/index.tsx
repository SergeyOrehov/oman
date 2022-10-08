import React from "react";

//route
import { BrowserRouter } from "react-router-dom";

//components
import AppContent from "components/AppContent";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
