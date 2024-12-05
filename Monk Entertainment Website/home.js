// script.js
const songs = [
    { name: "Vidaamuyarchi Theme", img: "vidaamuyarchi.jpg", file: "https://drive.google.com/file/d/1oiL0ZeW5Z6Tcl7fyL0AxAWbb7fbuz9hn/view?usp=drive_link" },
    { name: "chub1na.ge - ჩუბინა", img: "chub1na.ge.jpg", file: "https://drive.google.com/file/d/1oXfksMMBGteQH3iUaAoqwz1ln-t02gkD/view?usp=drive_link" },
    { name: "Yennai Izhukkuthadi", img: "yennai izhukkuthadi.jpg", file: "https://drive.google.com/file/d/1oDBtHYZIHXExGWjcVfUiMPK8cc0kVHaj/view?usp=drive_link" },
    { name: "Amaran - Vaane Vaane", img: "vaane vaane.jpg", file: "https://drive.google.com/file/d/1nxuySi8QUbVRiNIqAvJpazSzrK4Ga6l_/view?usp=drive_link" },
    { name: "Amaran - Hey Minnale", img: "heyminnale.jpg", file: "https://drive.google.com/file/d/1gng-GkPEXx2Rlo5ozNNHUMABTZaY8yjN/view?usp=drive_link" },
    { name: "kalki 2898AD - Bujji Theme", img: "kalki1.jpg", file: "https://drive.google.com/file/d/1OGfPV0ykefQIPXvs9diFoY9ZOAjoBJdS/view?usp=drive_link" },
    { name: "Kalki 2898AD - Bujji", img: "kalki2.jpg", file: "https://drive.google.com/file/d/1OFawU_FH6hLTeA6vTnBk876Fu_yAI9I1/view?usp=drive_link" }
];

const songsContainer = document.getElementById('songs-container');
const searchBar = document.getElementById('searchBar');

// Function to render songs
function renderSongs(songList) {
    songsContainer.innerHTML = '';
    songList.forEach(song => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        songCard.innerHTML = `
            <img src="${song.img}" alt="${song.name}">
            <h3>${song.name}</h3>
            <button onclick="downloadSong('${song.file}')">Download</button>
        `;
        songsContainer.appendChild(songCard);
    });
}

// Function to filter songs
function filterSongs() {
    const searchText = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(searchText));
    renderSongs(filteredSongs);
}

// Function to download a song
function downloadSong(file) {
    const link = document.createElement('a');
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initial rendering
renderSongs(songs);
