// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row

function csvTo2DArray(csvString) {
    // Split the CSV string into an array of rows
    const rows = csvString.split('\n');
    
    // Extract the titles from the first row
    const titles = rows[0].split(',');
    
    // Initialize the 2D array to hold the objects
    const data = [];
    
    // Iterate through the rows (skipping the first row)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      
      // Skip empty rows
      if (row.trim() === '') {
        continue;
      }
      
      // Split the row into an array of values
      const values = row.split(',');
      
      // Create an object and assign values using the titles as keys
      const obj = {};
      for (let j = 0; j < titles.length; j++) {
        const title = titles[j];
        const value = values[j];
        obj[title] = value;
      }
      
      // Add the object to the data array
      data.push(obj);
    }
    
    return data;
  }
  
  // Example usage
  const csvString = `Name,Age,City
  John,25,New York
  Jane,30,San Francisco
  Mike,35,Chicago`;
  
  const result = csvTo2DArray(csvString);
  console.log(result);
  