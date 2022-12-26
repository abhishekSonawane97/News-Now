console.log('index-js');
// 2ef21a5c05834c1099d8c3148cb152d5 

// Initialize the news api parameters


let source = 'bbc-news';
let apiKey = '2ef21a5c05834c1099d8c3148cb152d5 '

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = '';
        articles.forEach(function(element, index){
console.log(element);
        let news = `<div class="card bg-dark">
        <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
            <button class="btn btn-link text-light collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}" style='font-size:20px'>
               <b class='text-primary'>Breaking News ${index+1} : </b>${element["title"]}
            </button>
            </h2>
        </div>

        <div id="collapse${index}" class="collapse text-white" aria-labelledby="heading${index}" data-parent="#newsAccordion"c>
        <div class="card-body"> ${element["content"]}. 
            <a class='text-white' href="${element['url']}" target="_blank"><p class='text-primary'>Read more here</p></a>
        </div>
        </div>
    </div>`;
newsHtml += news;
    });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        title.log('some error occured');
    }
}
xhr.send();

