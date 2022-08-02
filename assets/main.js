const API = 'https://hapi-books.p.rapidapi.com/month/2022/7'

const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7fef55e49mshc5cc3ed3de244adp1556cdjsn77db2b97f8cf',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

async function fechtData(urlApi) {
    const response = await fetch(API, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const books = await fechtData(API)
        let view = `
        ${books.map(book => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${book.cover}" alt="${book.name}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${book.name}
            </h3>
          </div>
        </div>
        `).slice(0, 4).join('')}
        `
        content.innerHTML = view

    } catch (error) {
        console.log(error)
        content.innerHTML = `error: lo sentimo pero no lo sentimos xd ${error}`

    }
})()