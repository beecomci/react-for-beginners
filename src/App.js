import { useState, useEffect } from 'react';

function Hello() {
  const byeFn = () => {
    console.log("destroyed"); // 컴포넌트가 destroy 될 때 실행됨
  };

  const hiFn = () => {
    console.log("created"); // Hello 컴포넌트가 create 될 때 맨 처음 1회만 실행됨

    return byeFn;
  };

  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button
        onClick={onClick}>
        {showing ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
