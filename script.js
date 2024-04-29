function fetchAPI(){
    const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=J8A5UUMTA3BU8SKLRDUXB8269';
    fetch(url)
    .then((res)=>res.json())
    .then(renderUI);
}

fetchAPI()
function renderUI(data){
    // const days=data.days;
    // console.log(days);

    const row=document.createElement("tr");
    const cell1=document.createElement("th");/
    cell1.innerText='Date';
    row.appendChild(cell1);

    const cell2=document.createElement("th");
    //let cell2=document.createElement("th");
    cell2.innerText='Maximum Temperature';
    row.appendChild(cell2);

    const cell3=document.createElement("th");
    //let cell2=document.createElement("th");
    cell2.innerText='Mininum Temperature';
    row.appendChild(cell3);

    roo t
}