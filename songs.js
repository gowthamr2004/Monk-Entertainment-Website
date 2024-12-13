const songs = [
    { name: "Lubber Pandhu - Aasa Orave Song", img: "songs\\lubber panthu - aasa urave song.jpg", file: "songs\\lubber panthu - aasa urave song.mp3" },
    { name: "LIK - Dheema Dheema Song", img: "songs\\lik - Dheema Song.jpg", file: "songs\\lik - Dheema Song.mp3" },
    { name: "Amaran - Hey Minnale Song", img: "songs\\Amaran - Hey Minnale Song.jpg", file: "songs\\Amaran - Hey Minnale Song.mp3" },
];

const songsContainer = document.getElementById('songs-container');
const searchBar = document.getElementById('searchBar');

// Function to render Songs
function renderSongs(songList) {
    songsContainer.innerHTML = '';
    const regularSongs = songList.filter(song => song.name.toLowerCase().includes('song'));
    
    regularSongs.forEach(song => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        songCard.innerHTML = `
            <img src="${song.img}" alt="${song.name}">
            <h3>${song.name}</h3>
        `;
        songCard.onclick = () => navigateToSongDetail(song);
        songsContainer.appendChild(songCard);
    });
}

// Function to filter Songs
function filterSongs() {
    const searchText = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.name.toLowerCase().includes(searchText) &&
        (song.name.toLowerCase().includes('song') ||
        (!song.name.toLowerCase().includes('bgm') &&
         !song.name.toLowerCase().includes('ringtone') &&
         !song.name.toLowerCase().includes('theme')))
    );
    renderSongs(filteredSongs);
}

// Function to navigate to song detail page
function navigateToSongDetail(song) {
    localStorage.setItem('selectedSong', JSON.stringify(song));
    window.location.href = 'song-detail.html';
}

// Function to scroll to the footer
function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = 0; // Fade-out effect before navigation
    setTimeout(() => {
        window.location.href = page; // Delay navigation slightly
    }, 500);
}


// Initial rendering
renderSongs(songs);


document.addEventListener('DOMContentLoaded', () => {
    // Apply the fade-in effect on page load
    document.body.classList.add('fade-in');
});