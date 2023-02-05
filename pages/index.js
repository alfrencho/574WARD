import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const onUserChangedText = event => {
    setUserInput(event.target.value);
  };

  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    try {
      const response = await axiosInstance.post('/api/generate', { userInput }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
      });

      console.log("OpenAI replied...", response.data.output.text);
      setApiOutput(response.data.output.text);
    } catch (error) {
      console.error(error);
    }
    setIsGenerating(false);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>574WARD Marketing Assistant</h1>
          </div>
          <div className="header-subtitle">
            <h2>Build The Bend</h2>
          </div>
        </div>
        <div className="prompt-container">
        </div>
        <textarea
          placeholder="start typing here"
          className="prompt-box"
          value={userInput}
          onChange={onUserChangedText}
        />
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-


