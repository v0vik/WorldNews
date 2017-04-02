
window.onload = function () {

  function fetchNews(source) {
    
    const url = new URL('https://newsapi.org/v1/articles');

    url.searchParams.append('source', source);
    url.searchParams.append('sortBy', 'top');
    url.searchParams.append('apiKey', 'd26e136a686147968d0597343a0979b7');

    document.getElementById("source-name").innerHTML = source;

    return fetch(url)
      .then(response => response.json())
      .then((result) => { createNewsItem(result); })
      .catch(console.error);
  }


  function createNewsItem(result) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";
    for (let i = 0; i < 10; i++) {

      let node = document.createElement("ARTICLE");
      node.innerHTML = '<img src="' + result.articles[i].urlToImage + '" alt="No picture">' +
        '<div>' + result.articles[i].publishedAt.slice(0,10) + '</div>' +
        '<div>' + result.articles[i].title + '</div>' +
        '<a href=' + result.articles[i].url + '>Read more...</a>';
      newsContainer.appendChild(node);
    }
  }






  let sources = ["bbc-news", "bloomberg", "national-geographic", "fox-sports"];

  let b = document.getElementsByClassName("button");

  sources.forEach((source, i) => {
    b[i].addEventListener("click", () => fetchNews(source));
  });

  fetchNews("bbc-news");

}