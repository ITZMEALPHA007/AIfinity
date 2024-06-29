import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to AIfinity</h1>
        <p>Personalized financial advice at your fingertips.</p>
      </header>
      <main>
        <section>
          <h2>Latest Advice</h2>
          <p>Loading...</p> {/* Placeholder for fetched advice */}
        </section>
      </main>
    </div>
  );
}

export default App;
