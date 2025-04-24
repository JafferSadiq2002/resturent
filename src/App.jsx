import React from "react";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import DishProvider from "./context/ContextProvider";
import DishesView from "./components/DishesView";
const App = () => {
  return (
    <div>
      <DishProvider>
        <Header />
        <CategoryBar />
        <DishesView />
      </DishProvider>
    </div>
  );
};

export default App;
