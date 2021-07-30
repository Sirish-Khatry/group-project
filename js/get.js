(() => {
    let container = document.querySelector("#flex");

//     function createTableHeaderRow(headers) {
//       // create table row
//       const headerRow = document.createElement("tr");
  
//       // iterate over headers array
//       for (const headerText of headers) {
//           // create header element
//           const header = document.createElement("th");
//           header.style.borderRight = "1px solid";
//           header.style.borderBottom = "2px solid";
//           // set inner text of header
//           header.innerText = headerText;
  
//           // append header element to the header row element
//           headerRow.appendChild(header);
//       }
//       return headerRow;
//   }

//     function createTableDataRow(data) {
//       // creating a table row
//       const dataRow = document.createElement("tr");
//       // iterating over the data array
//       for (const dataItem of data) {
//           // creating a table data element
//           const dataElement = document.createElement("td");
//           dataElement.style.borderBottom = "1px solid";
//           dataElement.style.borderRight = "1px solid";
        
//           // set the inner text to the current data item
//           dataElement.innerText = dataItem;
  
//           // append the data element to the data row
//           dataRow.appendChild(dataElement);
//       }
//       return dataRow;
//   }
    
//   function createTable(headers, data) {
//     console.log(data);
//     const headerRow = createTableHeaderRow(headers);
//     const dataRows = [];

//     // iterate over the 2d array of data
//     for (const dataSet of data) {
//         // create a table row element with table data and append to the dataRows array
//         dataRows.push(createTableDataRow(dataSet));
        
//        // console.log(dataRows);
//     }

//     // create a table element
//     const table = document.createElement("table");
//     table.style.border="2px solid";
    
//     // append the header row to the table
//     table.appendChild(headerRow);
    
//     // iterate over the array of built data row elements
//     for (dataRow of dataRows) {
//         // append each dataRow element to the table
//         table.appendChild(dataRow);
//     }
//     return table;
// }

  function createCard(header, result){

    for (data of result) {
      var div = document.createElement("div");
      div.setAttribute("class", "card");
      var head = document.createElement("h4");
      head.innerText = header[0];
      var para = document.createElement("p");
      para.innerText = data[0];
      var head2 = document.createElement("h4");
      head2.innerText = header[1];
      var para2 = document.createElement("p");
      para2.innerText = data[1];
      var head3 = document.createElement("h4");
      head3.innerText = header[2];
      var para3 = document.createElement("p");
      para3.innerText = data[2];
      var head4 = document.createElement("h4");
      head4.innerText = header[3];
      var para4 = document.createElement("p");
      para4.innerText = data[3];
      var head5 = document.createElement("h4");
      head5.innerText = header[4];
      var para5 = document.createElement("p");
      para5.innerText = data[4];
        
    }
    div.appendChild(head);
    div.appendChild(para);
    div.appendChild(head2);
    div.appendChild(para2);
    div.appendChild(head3);
    div.appendChild(para3);
    div.appendChild(head4);
    div.appendChild(para4);
    div.appendChild(head5);
    div.appendChild(para5);
    return div;
    // <h4><b>John Doe</b></h4>
    // <p>Architect & Engineer</p>

    console.log(result[1]);
  }
  function simpleFetch(){
        fetch(`https://api.punkapi.com/v2/beers/1`)
        .then((response => {
          if(response.status !== 200){
            console.error(`status: ${response.status})`);
            return;
          }
          return response.json();
        })) 
        .then(data => {
            console.log(data);
            const result = data.map(({name, tagline, first_brewed, description, food_pairing}) => [name, tagline, first_brewed, description, food_pairing]);
            const table = createCard(header, result);
            container.appendChild(table);
          // let element = document.createElement("p");
          // element.innerText = data[0].title;

          //container.appendChild(element);
        
        })
        .catch(error => console.error(error))
        .finally(() => { console.log("All OK!"); });
  }

  function simpleFetch2(){
    fetch(`https://api.punkapi.com/v2/beers/2`)
    .then((response => {
      if(response.status !== 200){
        console.error(`status: ${response.status})`);
        return;
      }
      return response.json();
    })) 
    .then(data => {
        console.log(data);
        const result = data.map(({name, tagline, first_brewed, description, food_pairing}) => [name, tagline, first_brewed, description, food_pairing]);
        const table = createCard(header, result);
        container.appendChild(table);
      // let element = document.createElement("p");
      // element.innerText = data[0].title;

      //container.appendChild(element);
    
    })
    .catch(error => console.error(error))
    .finally(() => { console.log("All OK!"); });
}
  const header = ["NAME", "TAGLINE", "FIRST_BREWED", "DESCRIPTION", "FOOD_PAIRING"];
  simpleFetch();
  simpleFetch2();

  // simpleFetch();
  // simpleFetch();
  // simpleFetch();

})();