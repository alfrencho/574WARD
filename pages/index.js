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

  // Check if response begins with stop sequence
  const stopSequence = "<STOP SEQUENCE>";
  if (output.text.startsWith(stopSequence)) {
    console.log("Response begins with stop sequence, ignoring...")
    setIsGenerating(false);
    return;
  }
  
  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}


 
