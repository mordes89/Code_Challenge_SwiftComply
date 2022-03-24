# Mike Schnall's Code Challenge

## How to run the program
 - Open a console and navigate to the local directory of /SwiftComply where the file is located
 - Run the following command: 'npm install'
 - Run: 'node index.js'
 - The converted info will now be written in the file named: newCSV.csv

### Libraries
 - Node
 - npm
 - xml2csv


### Explanation
 - The xml and sample-csv files are in the folder named 'files'
 - The file named index.js does the following:
   - Reads the data from the xml file
   - Converts it to CSV format
   - Writes it to the file named: newCSV.csv
 - The file named newCSV.csv does the following:
   - Starts out as an empty file
   - Once index.js is run, this file will contain the resulting info

### Note
 - I kept the format of all the columns that properties.csv had. If the only columns needed were the ones listed at the bottom of the instructions, the non-relevant entry rows in index.js can be omitted.