 console.log("...APP started..........");

// const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
// function callAPI() {
//   fetch(url)
//   .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById("joke").innerHTML = data.value;
//     })
// }

//  const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
function callAPI() {
  fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=43cb6d989c2942c0b858a4361b875c9e")
  //.then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     document.getElementById("joke").innerHTML = data.value;
    .then((res)=>res.json())
        

    .then((data)=> renderUI(data))
    
}


function renderUI(data){
    // const articles =data.articles;

    //console.log(articles);
    const root=document.getElementById("root");
    const articles =data.articles;
    for(let i=0;i<articles.length;i++){
    const ar=articles[i];
    //console.log(ar);
    const div=document.createElement("div");
    div.setAttribute("class","news-card");

    const h3=document.createElement("h3");
    h3.innerText=ar.title;
    div.appendChild(h3);
    
    const img=document.createElement("img");
    img.src=ar.urlToImage;
    //div.appendchild(h3);
    div.appendChild(img);

    root.appendChild(div);
    }
}
callAPI();
//renderUI();