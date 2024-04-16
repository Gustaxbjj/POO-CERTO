let artista1 = {
   titulo: "Jiu-Jitsu Evolução", 
   artista: "Billi MC",
   album: "Single",
    poster: "JiuJitsu.jpg",
    video: `4RJBJ9o0XWU?si=Kj2M67KgIwtVI0Qn`

}

let artista2 = {
    titulo: "Até Que Durou", 
    artista: "Pericles",
    album: "Em sua Direção",
     poster: "AteQueDurou.jpg",
     video: `T3Y6RRSDm4o?si=IdLoJV9gsGKDkLe9`
 }

 let artista3 = {
    titulo: "Linda voz", 
    artista: "Pericles e Lucas Morato",
    album: "feat",
     poster: "lindavoz.jpg",
     video:   `AENA_nvF-L0?si=V4eb_mLpqcD2epX5`
    }

 let artista4 = {
    titulo: "Poesia acústica 09", 
    artista: "L7NNON | CHRIS | Xamã | Lourena | Cesar Mc | Djonga | Filipe Ret",
    album: "Single",
     poster: "poesia9.jpg",
     video: `0N3VGsx05is?si=BJNBE3AW16Wa_OQN`
 }

 let artista5 = {
    titulo: "Vibe Meliodas", 
    artista: " MHRAP",
    album: "Single",
     poster: "VibeMeliodas.jpg",
     video: `zt_rO_o9oD8?si=5y9eiQN7lIkAYRyC`
 }

 let artista6 = {
    titulo: "Maldita de ex", 
    artista: "MC Leozin",
    album: "Single",
     poster: "EX.jpg",
     video: `RcL402OTE4U?si=cmgh_6Dl0V8T6snk`
 }


 let artista7 = {

 
    titulo: "Vibe animes", 
    artista: "MHRAP",
    album: "Vibes",
     poster: "Sad.jpg",
     video: `solD-qPJClY?si=VkpZR5D4YPG6ivW7`
 }

 let artista8 = {
    titulo: "Amor e fé", 
    artista: "Hungria",
    album: "Single",
     poster: "AmoreFé.jpg",
     video: `iZq0u3quAqo?si=jq-SxVARyFSV8aGg`
 }

 let artista9 = {
    titulo: "Putz Animes", 
    artista: "MHRAP",
    album: "Single",
     poster: "Putzanimes.jpg",
     video: `6UkoAlTLDz8?si=OzIONpTqO2vJcAeX`
 }

 let artista10 = {
    titulo: "Rap Luffy", 
    artista: "MHRAP",
    album: "Vibes",
     poster: "rapDolufy.jpg",
     video: `ivGBhIg-zK4?si=_I_L9vSio0rAJQAw`
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
 

const index = document.querySelector('aS')

for (let i = 0; i < Playlist.length; i++) {
    document.write(`

   <div class="card" >

   <img class="poster" src='img2/${Playlist[i].poster}' >
   
   
   
   <div class = "tituloEartista">
   <span class="titulo">${Playlist[i].titulo}  </span> 

        <span class="artista"> ${Playlist[i].artista}</span>
        </div>
        
        <span class="album"> ${Playlist[i].album}</span>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/${Playlist[i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>   

    `);
}
