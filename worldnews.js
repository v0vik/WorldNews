function fetchNews(source) {
  const url = new URL('https://newsapi.org/v1/articles');

  url.searchParams.append('source', source);
  url.searchParams.append('sortBy', 'top');
  url.searchParams.append('apiKey', 'd26e136a686147968d0597343a0979b7');

  return fetch(url)
    .then(response => response.json())
    .then((result) => {
      const newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";
       for (let i =0; i<10; i++) {
        
        var node = document.createElement("ARTICLE");
        node.innerHTML = "<img src=\"" +result.articles[i].urlToImage +"\"alt=\"No picture\">"+
        '<div>'+result.articles[i].title+'</div>'+
        '<a href='+result.articles[i].url+ '>Read more...</a>';
        newsContainer.appendChild(node);
       }
  })
    .catch(console.error);
}



var b = document.getElementsByClassName("button");

let sources = ["bbc-news","cnn","hacker-news","fox-sports"];


for (let i =0; i<4; i++) {
  b[i].addEventListener("click", function(){return fetchNews(sources[i]);});
}