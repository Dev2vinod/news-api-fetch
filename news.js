// eff9bdc08da2430a98eadc04e93b300a news api key

let getNews = (search) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${search}&from=2024-01-28&sortBy=publishedAt&apiKey=eff9bdc08da2430a98eadc04e93b300a`
  )
    .then((res) => res.json())
    .then((res) => {
      //  console.log(res," im good part of a data")
      let data = res.articles;
      let news = document.getElementById("news");
      for (let i = 0; i < data.length; i++) {
        console.log(data[i], " im from articles");
        const { urlToImage, title, description, source } = data[i];
        news.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src="${urlToImage}" class="news-img card-img-top" alt="...">
      <div class="card-body">
    <h5 class="card-title">${title.slice(0, 20)}...</h5>
    <p class="card-text">${description.slice(0, 100)}...</p>
    <h6>${source.name}</h6>
    
    
    </div>
</div>
      `;
      }
    });

  // .catch((res) => console.log(err, "i am error part"));
};
getNews();

function newsSearch() {
  let news = document.getElementById("news");

  let search = document.getElementById("search").value;
  news.innerHTML = "";
  getNews(search);
}
