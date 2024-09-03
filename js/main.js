const limit = 10;
const page = 10;
const url = `https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=${limit}`;
const starlistOL = document.getElementById("starlist")

function convertCharacterToLi(character){
    return `
    <li class="character">
                <span class="name">${character.name}</span>
                <div class="detail">
                    <span class="description">${character.description}</span>
                    <img src="${character.image}" alt="${character.name}">
                </div>
            </li>
    `
}

fetch(url)
    .then((response) => response.json())
    .then((json) => json.data)
    .then((starlist) => 
        starlistOL.innerHTML = 
        starlist.map(convertCharacterToLi).join(""))
    .catch((error) => console.log(error));

    