const songs = [
    { name: "Vidaamuyarchi Theme BGM & Ringtone", img: "bgm&ringtone\\vidaamuyarchi.jpg", file: "bgm&ringtone\\vidaamuyarchi.mp3"},
    { name: "chub1na.ge - ჩუბინა BGM & Ringtone", img: "bgm&ringtone\\chub1na.ge.jpg", file: "bgm&ringtone\\chub1na.ge.mp3" },
    { name: "Yennai Izhukkuthadi Ringtone", img: "bgm&ringtone\\yennai izhukkuthadi.jpg", file: "bgm&ringtone\\yennai izhukkuthadi.mp3" },
    { name: "Amaran - Vaane Vaane Ringtone", img: "bgm&ringtone\\vaane vaane.jpg", file: "bgm&ringtone\\vaane vaane.mp3" },
    { name: "Amaran - Hey Minnale Ringtone", img: "bgm&ringtone\\heyminnale.jpg", file: "heyminnale.mp3" },
    { name: "kalki 2898AD - Bujji Theme BGM & Ringtone", img: "bgm&ringtone\\kalki1.jpg", file: "bgm&ringtone\\kalki1.mp3" },
    { name: "Kalki 2898AD - Bujji BGM & Ringtone", img: "bgm&ringtone\\kalki2.jpg", file: "bgm&ringtone\\kalki2.mp3" },
    { name: "Indian2 - Kadharalz Ringtone", img: "bgm&ringtone\\indian2.jpg", file: "bgm&ringtone\\indian2.mp3" },
    { name: "Laapataa Ladies - Sajni Ringtone", img: "bgm&ringtone\\laapata ladies.jpg", file: "bgm&ringtone\\laapata ladies.mp3" },
    { name: "Aavesham - Illuminati Ringtone", img: "bgm&ringtone\\illuminati.jpg", file: "bgm&ringtone\\illuminati.mp3" },
    { name: "Ghilli - Kadhala Kadhala BGM & Ringtone", img: "bgm&ringtone\\ghilli.jpg", file: "bgm&ringtone\\ghilli.mp3" },
    { name: "Premalu - Welcome to Hyderabad BGM & Ringtone", img: "bgm&ringtone\\premalu.jpg", file: "bgm&ringtone\\premalu.mp3"},
    { name: "Baby Jean - Kaayi BGM & Ringtone", img: "bgm&ringtone\\kaayi.jpg", file: "bgm&ringtone\\kaayi.mp3"},
    { name: "Lover - Usura Uruvi BGM & Ringtone", img: "bgm&ringtone\\lover.jpg", file: "bgm&ringtone\\lover.mp3"},
    { name: "Hugo - 99 Problems BGM & Ringtone", img: "bgm&ringtone\\99problems.jpg", file: "bgm&ringtone\\99problems.mp3"},
    { name: "Mashle - Bing Bang Bang Born BGM & Ringtone", img: "bgm&ringtone\\mashle.jpg", file: "bgm&ringtone\\mashle.mp3"},
    { name: "Sai Abhyankkar - Katchi Sera Ringtone", img: "bgm&ringtone\\kachi sera.jpg", file: "bgm&ringtone\\kachi sera.mp3"},
    { name: "Joe - Urugi Urugi Ringtone", img: "bgm&ringtone\\joe.jpg", file: "bgm&ringtone\\joe.mp3"},
    { name: "Stranger Things - Never Ending Story Ringtone", img: "bgm&ringtone\\never ending story.jpg", file: "bgm&ringtone\\never ending story.mp3"},
    { name: "Sillunu Oru Kadhal - Acho Acho Ringtone", img: "bgm&ringtone\\acho acho.jpg", file: "bgm&ringtone\\acho acho.mp3"},
    { name: "Mangalavaaram BGM & Ringtone", img: "bgm&ringtone\\mangalavaaram.jpg", file: "bgm&ringtone\\mangalavaaram.mp3"},
    { name: "Bang Bang Bangkok Ringtone", img: "bgm&ringtone\\bangbangbangkok.jpg", file: "bgm&ringtone\\bangbangbangkok.mp3"},
    { name: "3(moonu) - Bike Ride BGM & Ringtone", img: "bgm&ringtone\\3.jpg", file: "bgm&ringtone\\3.mp3"},
    { name: "Kakkisattai - Out of Control BGM & Ringtone", img: "bgm&ringtone\\out of control.jpg", file: "bgm&ringtone\\out of control.mp3"},
    { name: "Salaar - Sound of Salaar BGM & Ringtone", img: "bgm&ringtone\\sound of salaar.jpg", file: "bgm&ringtone\\sound of salaar.mp3"},
    { name: "Salaar - Sound of Salaar Sad BGM & Ringtone", img: "bgm&ringtone\\sound of salaar sad.jpg", file: "bgm&ringtone\\sound of salaar sad.mp3"},
    { name: "Chipi chipi chapa chapa BGM & Ringtone", img: "bgm&ringtone\\chipi chipi chapa chapa.jpg", file: "bgm&ringtone\\chipi chipi chapa chapa.mp3"},
    { name: "Chithha - Kangal Edho Ringtone", img: "bgm&ringtone\\kangal edho.jpg", file: "bgm&ringtone\\kangal edho.mp3"},
    { name: "Chithha - Unakku Thaan Ringtone", img: "bgm&ringtone\\unakku thaan.jpg", file: "bgm&ringtone\\unakku thaan.mp3"},
    { name: "Animal - Jamal Jamaloo BGM & Ringtone", img: "bgm&ringtone\\jamal jamaloo.jpg", file: "bgm&ringtone\\jamal jamaloo.mp3"},
    { name: "Michael Buble - Feeling Good BGM & Ringtone", img: "bgm&ringtone\\feeling good.jpg", file: "bgm&ringtone\\feeling good.mp3"},
    { name: "Chaver - The Shadow of Death BGM & Ringtone", img: "bgm&ringtone\\the shadow of death.jpg", file: "bgm&ringtone\\the shadow of death.mp3"},
    { name: "M.I.A - Time Traveller Ringtone", img: "bgm&ringtone\\time traveller.jpg", file: "bgm&ringtone\\time traveller.mp3"},
    { name: "Dj Holanda - Montagem Coral BGM & Ringtone", img: "bgm&ringtone\\montagem coral.jpg", file: "bgm&ringtone\\montagem coral.mp3"},
    { name: "Leo - Ordinary Person 1 Ringtone", img: "bgm&ringtone\\ordinary person1.jpg", file: "bgm&ringtone\\ordinary person1.mp3"},
    { name: "Leo - Ordinary Person 2 Ringtone", img: "bgm&ringtone\\ordinary person2.jpg", file: "bgm&ringtone\\ordinary person2.mp3"},
    { name: "Vadachennai - Kaarkuzhal Kadavaiye Ringtone", img: "bgm&ringtone\\kaarkuzhal kadavaiye.jpg", file: "bgm&ringtone\\kaarkuzhal kadavaiye.mp3"},
    { name: "Adiyae - Vaa Senthaazhini Ringtone", img: "bgm&ringtone\\vaa senthaazhini.jpg", file: "bgm&ringtone\\vaa senthaazhini.mp3"},
    { name: "Railin Oligal Ringtone", img: "bgm&ringtone\\railin oligal.jpg", file: "railin oligal.mp3"},
    { name: "Leo - Badass Ringtone", img: "bgm&ringtone\\leo badass.jpg", file: "bgm&ringtone\\leo badass.mp3"},
    { name: "Dhruva Natchathiram - His Name is John Ringtone", img: "bgm&ringtone\\his name is john.jpg", file: "bgm&ringtone\\his name is john.mp3"},
    { name: "Alanwalker - Lily Violin Ringtone", img: "bgm&ringtone\\lily violin.jpg", file: "bgm&ringtone\\lily violin.mp3"},
    { name: "Farzi BGM", img: "bgm&ringtone\\farzi bgm.jpg", file: "bgm&ringtone\\farzi bgm.mp3"},
    { name: "Leo - Bloody Sweet BGM & Ringtone", img: "bgm&ringtone\\leo bloody sweet.jpg", file: "bgm&ringtone\\leo bloody sweet.mp3"},
    { name: "Pathaan - Jhoome Jo Pathaan BGM & Ringtone", img: "bgm&ringtone\\pathaan.jpg", file: "bgm&ringtone\\pathaan.mp3"},
    { name: "MUPP x Sadfriendd - Vendetta BGM & Ringtone", img: "bgm&ringtone\\vendetta.jpg", file: "bgm&ringtone\\vendetta.mp3"},
    { name: "The Boys - Bones BGM & Ringtone", img: "bgm&ringtone\\bones.jpg", file: "bgm&ringtone\\bones.mp3"},
    { name: "Theme of 3 BGM & Ringtone", img: "bgm&ringtone\\theme of 3.jpg", file: "bgm&ringtone\\theme of 3.mp3"}, 
];

const songsContainer = document.getElementById('songs-container');
const searchBar = document.getElementById('searchBar');

// Function to render Songs (now focuses on 'bgm' or 'ringtone')
function renderSongs(songList) {
    songsContainer.innerHTML = '';
    const bgmAndRingtoneSongs = songList.filter(song => 
        song.name.toLowerCase().includes('bgm') || 
        song.name.toLowerCase().includes('ringtone')
    );
    
    bgmAndRingtoneSongs.forEach(song => {
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

// Function to filter Songs based on search input
function filterSongs() {
    const searchText = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        (song.name.toLowerCase().includes('bgm') || 
         song.name.toLowerCase().includes('ringtone')) &&
        song.name.toLowerCase().includes(searchText)
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


// Initial rendering: Display only BGM and Ringtone songs
renderSongs(songs);


document.addEventListener('DOMContentLoaded', () => {
    // Apply the fade-in effect on page load
    document.body.classList.add('fade-in');
});

