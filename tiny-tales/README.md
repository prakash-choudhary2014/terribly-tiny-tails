# Word Frequency Histogram

This React code generates a word frequency histogram from a text file.

## Installation

- Clone the repository from github.
- Install dependencies using `npm install`.

## Run
-Run using `npm start`


## Usage

- Place the text file you want to analyze in the same directory as this code and name it `dummy.txt`.
- Click the "Submit" button to load the file and generate the histogram.
- The top 20 most frequent words will be displayed in a bar chart.
- Click the "Export" button to download the word frequency data as a CSV file.

## Dependencies

- React
- react-chartjs-2
- file-saver
- chart.js/auto


## Code Explanation

The code in this repository is a React application that analyzes a text file and generates a word frequency histogram. Here's a breakdown of the main components and functionalities:

- **App Component:** The main component of the application. It manages the file content, word frequency data, and export functionality.

- **handleFileSubmit:** This function is triggered when the "Submit" button is clicked. It fetches the content of the `dummy.txt` file(url also can be used), calculates the word frequency, and updates the state.

- **handleExport:** This function is triggered when the "Export" button is clicked. It converts the word frequency data into a CSV format and allows the user to download it as a file.

- **Chart Component:** This component uses the `react-chartjs-2` library to display a bar chart representing the top 20 most frequent words.

- **Sorted Words and Top Words:** These variables store the sorted word frequency data to display the top 20 most frequent words in the bar chart.
