const API = 'https://studio-ghibli.p.rapidapi.com/films'

const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7fef55e49mshc5cc3ed3de244adp1556cdjsn77db2b97f8cf',
		'X-RapidAPI-Host': 'studio-ghibli.p.rapidapi.com'
	}
};

async function fechtData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const films = await fechtData(API)
        const aleatorio = parseInt(films.length * Math.random())
        
        console.log(aleatorio ,films.length)
        let filmReturn = `
        ${films.map(film => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${film.image}" alt="${film.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${film.description}
            </h3>
          </div>
        </div>
        `).slice(aleatorio, aleatorio + 4).join('')}
        `
        content.innerHTML = filmReturn

    } catch (error) {
        console.log(error)
        content.innerHTML = `error: lo sentimo pero no lo sentimos xd ${error}`

    }
})()