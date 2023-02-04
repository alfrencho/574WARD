
import { useState } from 'react';

import React, { useState, useEffect } from 'react';

import { OpenAIApi } from 'openai';


const Home = () => {
  const [userInput, setUserInput] = useState('');
  
  const onUserChangedText = (event) => {
   
    setUserInput(event.target.value);
  }
const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  

  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response =  await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }
  
  const Home = () => {
    const [userInput, setUserInput] = useState("");
    const onUserChangedText = event => {
      setUserInput(event.target.value);
    };
  }
const apiKey = process.env.OPENAI_API_KEY;

  return (
    <><div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>574WARD Marketing Assistant</h1>
          </div>
          <div className="header-subtitle">
            <h2>Build The Bend</h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
        </div>
        <textarea
          placeholder="start typing here"
          className="prompt-box"
          value={userInput}
          onChange={onUserChangedText} />
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
      </div>
    </div><a className="generate-button" onClick={callGenerateEndpoint}>
        <div className="generate">
          <p>Generate</p>
        </div>
      </a></> 
   
  );
};

export default Home;

