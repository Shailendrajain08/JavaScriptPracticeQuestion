function csvToArray(csvString) {
    var rows = csvString.split('\n');
    var result = [];
  
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i].trim();
        console.log("row", row)
      if (row !== '') {
        var cells = row.split(',');
        result.push(cells);
        console.log("result", result)
      }
    }
  
    return result;
  }
  
  // Example usage:
  var csvString = "John,Doe,25\nJane,Smith,30\nBob,Johnson,40";
  var array = csvToArray(csvString);
  console.log(array);
  