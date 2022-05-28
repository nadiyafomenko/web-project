document.addEventListener('DOMContentLoaded', function (event){
    let response = {}

    ajaxUtils.sendGetRequest('data/data.json', function (request) {
        response = JSON.parse(request.responseText);

        const news = document.querySelector('.new-carousel');
        const films = document.querySelector('.films-carousel');
        const serials = document.querySelector('.serials-carousel');

        const chunk1 = response.slice(0, 5);
        const chunk2 = response.slice(5, 10);
        const chunk3 = response.slice(10, 15);

        chunk1.forEach(film => {
            console.log(film)
            news.innerHTML += `
             <div class="card bg-dark text-white">
              <img class="card-img" src="${film.img}" alt="Card image">
              <div class="card-img-overlay">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.subtitle}</p>
              </div>
            </div>`
        })

        chunk2.forEach(film => {
            console.log(film)
            films.innerHTML += `
             <div class="card bg-dark text-white">
              <img class="card-img" src="${film.img}" alt="Card image">
              <div class="card-img-overlay">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.subtitle}</p>
              </div>
            </div>`
        })

        chunk3.forEach(film => {
            console.log(film)
            serials.innerHTML += `
             <div class="card bg-dark text-white">
              <img class="card-img" src="${film.img}" alt="Card image">
              <div class="card-img-overlay">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.subtitle}</p>
              </div>
            </div>`
        })
    })

})
