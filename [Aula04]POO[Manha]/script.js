let celularesA =
{
    foto: 'iphone15.png',
    armazenameto: '1024 GB',
    processador: '6 Core 2x performance + 4x efficiency',
    Ram: '8 GB',
    qualidadeDacamera: '1290 x 2796 pixel',
    tipoDetela: 'Super Retina XDR OLED',
    Preco: 7889,
    modelo: 'Iphone 15 Pro max',
    marca: 'apple',
    cor: 'preto',
    cargaDebateria: '4422 mAh',
    anoDelançamento: '2023'
}


let celularesB =
{
    foto: 'OnePlus.jpg',
    armazenameto: '128 GB',
    processador: '2x 2.2 GHz Kryo 660 Gold + 6x 1.7 GHz Kryo 660 Silver',
    Ram: '6 GB',
    qualidadeDacamera: '9238 x 6928 pixel',
    tipoDetela: 'IPS LCD',
    Preco: 1887,
    modelo: 'OnePlus Nord CE 2 Lite',
    marca: 'Never settle',
    cor: 'preto',
    cargaDebateria: '5000 mAh',
    anoDelançamento: '2022'
}



let celularesC =
{
    foto: 's24Ultra.jpg',
    armazenameto: '1024 GB',
    processador: '1x 3.39 GHz Cortex-X4 + 3x 3.1 GHz Cortex-A720 + 2x 2.9 GHz Cortex-A720 + 2x 2.2 GHz Cortex-A520',
    Ram: '12 GB',
    qualidadeDacamera: '',
    tipoDetela: 'Dynamic AMOLED 2X',
    Preco: 7499,
    modelo: 'Samsung Galaxy s24 Ultra',
    marca: 'Samsung',
    cor: 'prata',
    cargaDebateria: '5000 mAh',
    anoDelançamento: '2024'
}




let celularesD =
{
    foto: 'Poco6.jpg',
    armazenameto: '256 GB',
    processador: '3.4 GHz 8 Core',
    Ram: '8 GB',
    qualidadeDacamera: '16330 x 12247 pixel',
    tipoDetela: 'AMOLED',
    Preco: 2190,
    modelo: 'Poco X6 Pro',
    marca: 'Xiaomi',
    cor: 'azul',
    cargaDebateria: '5000 mAh',
    anoDelançamento: '2023'
}



let celularesE =
{
    foto: '13Tpro.jpg',
    modelo: 'Xiaomi 13T pro',
    armazenameto: '512 GB',
    processador: '1x 3.35 GHz Cortex-X3 + 3x 3.0 GHz Cortex-A715 + 4x 2.0 GHz Cortex-A510',
    Ram: '12 GB',
    qualidadeDacamera: '8165 x 6124 pixel',
    tipoDetela: '',
    Preco: 4810,
    marca: 'xiaomi',
    cor: 'Verde',
    cargaDebateria: '5000 mAh',
    anoDelançamento: '2023'
}

// -------------------------------------------------

console.log(`${celularesA.marca} ${celularesA.modelo} --> R$ ${celularesA.Preco}`);
console.log(`${celularesB.marca} ${celularesB.modelo} --> R$ ${celularesB.Preco}`)
console.log(`${celularesC.marca} ${celularesC.modelo} --> R$ ${celularesC.Preco}`)
console.log(`${celularesD.marca} ${celularesD.modelo} --> R$ ${celularesD.Preco}`)
console.log(`${celularesE.marca} ${celularesE.modelo} --> R$ ${celularesE.Preco}`)


let ListaDecelulares = [];
ListaDecelulares.push(celularesA);
ListaDecelulares.push(celularesB);
ListaDecelulares.push(celularesC);
ListaDecelulares.push(celularesD);
ListaDecelulares.push(celularesE);

//------------------------------------------------------    

for (let i = 0; i < ListaDecelulares.length; i++) {
    console.log(`${celularesA.marca} ${celularesA.modelo} --> R$ ${celularesA.Preco}`)
}
for (let i = 0; i < ListaDecelulares.length; i++) {
    document.write(`
   <div class="card">
   <img class="foto" src='img/${ListaDecelulares[i].foto}' >
        <p class="nome">${ListaDecelulares[i].marca} ${ListaDecelulares[i].modelo} </p> 
        <p class="armazenamento"> ${ListaDecelulares[i].armazenameto}</p>
        <p class="ram"> ${ListaDecelulares[i].Ram}</p>
        <p class="cor"> ${ListaDecelulares[i].cor}</p>
        <p class="preco"> R$ ${ListaDecelulares[i].Preco}</p>
 </div>   

    `)
}