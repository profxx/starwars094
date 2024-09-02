const url = `https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=100`;
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
    .then((starlist) => {
        for (let i = 0; i < starlist.length; i++){
            const character = starlist[i];
            starlistOL.innerHTML += convertCharacterToLi(character);
        }
    })
    .catch((error) => console.log(error));

    