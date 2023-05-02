onmessage = (event) => {
    const jsonData = event.data;
    console.log('Received JSON data:', jsonData);
  
    // Find the most populated country
    let mostPopulatedCountry = null;
    let maxPopulation = 0;
    for (const country of jsonData) {
      if (country.population > maxPopulation) {
        maxPopulation = country.population;
        mostPopulatedCountry = country;
      }
    }
    console.log('Most populated country:', mostPopulatedCountry);
  
    // Find the least populated country
    let leastPopulatedCountry = null;
    let minPopulation = Infinity;
    for (const country of jsonData) {
      if (country.population < minPopulation) {
        minPopulation = country.population;
        leastPopulatedCountry = country;
      }
    }
    console.log('Least populated country:', leastPopulatedCountry);
  
    // Find the median populated country
    const sortedCountries = jsonData.slice().sort((a, b) => a.population - b.population);
    const medianIndex = Math.floor(sortedCountries.length / 2);
    const medianPopulatedCountry = sortedCountries[medianIndex];
    console.log('Median populated country:', medianPopulatedCountry);
  
    // Send the processed data back to the main thread
    const processedData = {
      mostPopulatedCountry,
      leastPopulatedCountry,
      medianPopulatedCountry,
    };
    //localStorage.setItem('processedData', JSON.stringify(processedData));
    postMessage(processedData);
  };
  