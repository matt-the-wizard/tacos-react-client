import React from 'react';
import Taco from '../tacos/Taco';
import './App.css';

function App() {
    const testData = [
        {
            price: 2.25,
            title: "Bulgogi Korean Taco",
            description: "Korean taco marinated in Bulgogi BBQ Sauce"
        },
        {
            price: 2.05,
            title: "Thai Chicken Taco",
            description: "Taco layered in peanut butter thai sauce with lettuce and grilled chicken"
        },
        {
            price: 1.85,
            title: "Mexican Mole Taco",
            description: "Mexincan Mole sauce brings a spicy kick to this taco"
        }
    ];

  return (
    <div className="App">
      <header className="App-header">
          {testData.map((taco) =>
            <Taco title={taco.title} price={taco.price} description={taco.description} />
          )}
      </header>
    </div>
  );
}

export default App;
