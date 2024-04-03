let artista1 = {
   titulo: "Jiu-Jitsu Evolução", 
   artista: "Billi MC",
   album: "Single",
    poster: "JiuJitsu.jpg"
}

let artista2 = {
    titulo: "Até Que Durou", 
    artista: "Pericles",
    album: "Em sua Direção",
     poster: "AteQueDurou.jpg"
 }

 let artista3 = {
    titulo: "A morte do autotune", 
    artista: "Matuê",
    album: "A morte do autotune",
     poster: "Autotune.jpg"
 }

 let artista4 = {
    titulo: "Os Anjos cantam", 
    artista: "Jorge e Matheus",
    album: "Single",
     poster: "OsAnjosCantam.jpeg"
 }

 let artista5 = {
    titulo: "Vibe Meliodas", 
    artista: " MHRAP",
    album: "Single",
     poster: "VibeMeliodas.jpg"
 }

 let artista6 = {
    titulo: "Maldita de ex", 
    artista: "MC Leozin",
    album: "Single",
     poster: "EX.jpg"
 }


 let artista7 = {
    titulo: "Lapada dela", 
    artista: "Grupo Menos é Mais",
    album: "Churrasquiho Menos é Mais",
     poster: "LapadaDela.jpg"
 }

 let artista8 = {
    titulo: "Vai me dando Corda", 
    artista: "Grupo Menos é Mais",
    album: "Churrasquinho Menos é Mais",
     poster: "Vaimedando.jpg"
 }

 let artista9 = {
    titulo: "Foi bom, Mas foi ontem", 
    artista: "Grupo Menos é Mais",
    album: "Confia",
     poster: "FoiBom.jpg"
 }

 let artista10 = {
    titulo: "Bebe e vem me procurar ", 
    artista: "turma do quintal",
    album: "Single",
     poster: "VemMEProcurar.jpg"
 }


let Playlist = []
Playlist.push(artista1)
Playlist.push(artista2)
Playlist.push(artista3)
Playlist.push(artista4)
Playlist.push(artista5)
Playlist.push(artista6)
Playlist.push(artista7)
Playlist.push(artista8)
Playlist.push(artista9)
Playlist.push(artista10)
 



for (let i = 0; i < Playlist.length; i++) {
    document.write(`

   <div class="card" >

   <img class="poster" src='img/${Playlist[i].poster}' >
   
   
   
   <div class = "tituloEartista">
   <span class="titulo">${Playlist[i].titulo}  </span> 

        <span class="artista"> ${Playlist[i].artista}</span>
        </div>
        
        <p class="album"> ${Playlist[i].album}</p>
        



    </div>   

    `);
}
