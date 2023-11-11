import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  }

  const delClick = () => {
    setValue(value - 1);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>add num</button>
      <button onClick={delClick}>remove</button>
      <p>{value}</p>
    </div>
  );
}

export default App;
