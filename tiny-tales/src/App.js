


import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { saveAs } from 'file-saver';
import Chart from 'chart.js/auto';

const App = () => {
  const [fileContent, setFileContent] = useState('');
  const [wordFrequency, setWordFrequency] = useState({});
  const [showExportButton, setShowExportButton] = useState(false);

  const handleFileSubmit = async () => {
    const response = await fetch('dummy.txt');
    const content = await response.text();
    setFileContent(content);

    const words = content.split(/\s+/);
    const frequencyMap = {};

    words.forEach((word) => {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });

    setWordFrequency(frequencyMap);
    setShowExportButton(true);
  };

  const handleExport = () => {
    const csvContent = Object.entries(wordFrequency)
      .map(([word, frequency]) => `${word},${frequency}`)
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'histogram.csv');
  };

  const sortedWords = Object.keys(wordFrequency).sort(
    (a, b) => wordFrequency[b] - wordFrequency[a]
  );
  const topWords = sortedWords.slice(0, 20);

  const chartData = {
    labels: topWords,
    datasets: [
      {
        label: 'Word Frequency',
        data: topWords.map((word) => wordFrequency[word]),
        backgroundColor: 'rgba(255, 153, 51, 0.6)',
      },
    ],
  };

  return (
    <div>
      {!fileContent && (
        <button onClick={handleFileSubmit} style={{marginLeft: 800, marginTop: 400, width:200, height:100, fontSize:50, backgroundColor:'blue', cursor:'pointer' }} >Submit</button>
      )}
      {fileContent && (
        <div>
          <p>{fileContent}</p>
          <div style={{ height: '300px' }}>
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
          {showExportButton && (
            <button onClick={handleExport} style={{marginLeft: 800, marginTop:50, width:170, height:70, fontSize:50, backgroundColor:'blue', cursor:'pointer' }} >Export</button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
