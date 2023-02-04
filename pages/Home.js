import React, { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = event => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsGenerating(true);

    const response = await fetch(`/api/generate?input=${userInput}`);
    const data = await response.json();

    setApiOutput(data.output);
    setIsGenerating(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button type="submit">Generate</button>
      </form>
      {isGenerating && <p>Generating...</p>}
      {apiOutput && <p>{apiOutput}</p>}
    </div>
  );
};

export default Home;
