

let res=[];
let country = 'us';
let category = 'general';
let links = document.getElementsByClassName("nav-link");
let clear=[]
news(category);
for (let i = 0;i<links.length;i++) {
    links[i].addEventListener("click",function(e) {
         for (let j = 0;j<links.length;j++) {
             links[j].classList.remove("actv")
         }
         links[i].classList.add("actv")
          category = e.target.innerHTML;
          news(category);
          
    });
}





function news(cat) {
    let request = new XMLHttpRequest();

let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&apiKey=c3438a41b0534f1bb0035133cfd6c60a`;
request.open("get",url);
request.onreadystatechange = function() {
        if (request.status === 200   && request.readyState === 4) {
            res = JSON.parse( request.response );
            res = res.articles;
           clear= []
          for (let i = 0;i<res.length;i++) {
             if (res[i].urlToImage !== null && res[i].author !== null && res[i].title !== null && res[i].description !== null   && res[i].urlToImage !== "" && res[i].author !== "" && res[i].title !== "" && res[i].description !== "" && res[i].author !== "Al Jazeera"
                &&   res[i].urlToImage.includes("https://ktar.com/") == false) {              
                clear.push(res[i])  
                           
             }
          }
         
            display();
        }
    
    };
request.send();
}
/*
 && res[i].urlToImage !== "" && res[i].author !== "" && res[i].title !== "" && res[i].description !== "" && res[i].author !== "Al Jazeera"
*/
function display() {
    let box = "";
    for (let i = 0;i<clear.length;i++) {
        box += `
                 <div class="col-md-4 mb-5">
                       <div>
                     
                       <img  src="${clear[i].urlToImage}" class="img-fluid my-3">
                       <p style="height:70px" class="my-3 text-danger">${clear[i].author}</p>
                       <h3 class="my-3">${clear[i].title}</h3>
                           <p>${clear[i].description}</p>
                           
                       </div>
                  </div>
               
             `;
    }
    document.getElementById("rows").innerHTML = box;
}
function myFun() {

  setTimeout(() => {
    document.getElementsByClassName("over")[0].style.left="-100%"
    document.querySelector("footer").classList.remove("d-none")
    document.querySelector("body").style.overflow="auto"
  },2000)
 
}
