import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const [myState, setMyState] = useState(initialValue);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  function handleClick() {
    if (isMounted) {
      setMyState(newValue);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
}

export default MyComponent;





