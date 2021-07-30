(() => {
    let container = document.querySelector("#flex");

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
  }
  function simpleFetch(){
    const a = ["https://api.punkapi.com/v2/beers/246", "https://api.punkapi.com/v2/beers/11", "https://api.punkapi.com/v2/beers/314", "https://api.punkapi.com/v2/beers/90"];
        a.forEach((entry) => {
        fetch(entry)
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
        })
        .catch(error => console.error(error))
        .finally(() => { console.log("All OK!"); });
      });
    }
  const header = ["NAME", "TAGLINE", "FIRST_BREWED", "DESCRIPTION", "FOOD_PAIRING"];
  simpleFetch();

})();