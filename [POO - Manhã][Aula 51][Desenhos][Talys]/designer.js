function desenharCards(tagContainer, lista){
    tagContainer.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        tagContainer.innerHTML += `

            <div class="card">
                <img src="img/${lista[i].poster}" class='poster'>
                <span class="texto">Nome:${lista[i].titulo}</span>
                <span class="texto">Gênero:${lista[i].genero}</span>
                <span class="texto">Temporadas:${lista[i].temporadas}</span>
                <span class="texto">Ano:${lista[i].anoDelancamento}</span>
            </div>

        `;

       
    }
}