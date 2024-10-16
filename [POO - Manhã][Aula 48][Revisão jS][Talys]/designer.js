function desenharCards(tagContainer, lista){
    tagContainer.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        tagContainer.innerHTML += `

            <div class="card">
                <img src="img/${lista[i].foto}" class='foto'>
                <span class="texto">${lista[i].nome}</span>
                <span class="texto">${lista[i].tipo}</span>
                <span class="texto">R$${lista[i].preco}</span>
            </div>

        `;

       
    }
}