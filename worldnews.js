
window.onload = function () {

  function fetchNews(source) {
    console.log(source);
    const url = new URL('https://newsapi.org/v1/articles');

    url.searchParams.append('source', source);
    url.searchParams.append('sortBy', 'top');
    url.searchParams.append('apiKey', 'd26e136a686147968d0597343a0979b7');

    return fetch(url)
      .then(response => response.json())
      .then((result) => { createNewsItem(result); })
      .catch(console.error);
  }


  function createNewsItem(result) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      console.log(result);

      let node = document.createElement("ARTICLE");
      node.innerHTML = '<img src="' + result.articles[i].urlToImage + '" alt="No picture">' +
        '<div>' + result.articles[i].title + '</div>' +
        '<a href=' + result.articles[i].url + '>Read more...</a>';
      newsContainer.appendChild(node);
    }
  }






  let sources = ["bbc-news", "bloomberg", "hacker-news", "fox-sports"];

  let b = document.getElementsByClassName("button");

  sources.forEach((source, i) => {
    b[i].addEventListener("click", function () { return fetchNews(source) });
  });

}