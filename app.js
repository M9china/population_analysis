const fileInput = document.getElementById('file-upload');

fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  console.log('Selected file:', selectedFile);

  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    const fileContent = event.target.result;
    const jsonData = JSON.parse(fileContent);
    console.log('Parsed JSON data:', jsonData);

    // Create a new web worker
    const worker = new Worker('worker.js');

    // Send the parsed data to the web worker
    worker.postMessage(jsonData);

    // Listen for messages from the web worker
    worker.onmessage = (event) => {
      const processedData = event.data;
      console.log('Processed data:', processedData);
      // Add your code to handle the processed data here
      console.log('Received processed data:', processedData);

      localStorage.setItem('processedData', JSON.stringify(processedData));
      
    };
  };
  const processedData = JSON.parse(localStorage.getItem('processedData'));
console.log('Retrieved processed data:', processedData);

  fileReader.readAsText(selectedFile);
});
// Retrieve the processed data from local storage
const processedData = JSON.parse(localStorage.getItem('processedData'));




