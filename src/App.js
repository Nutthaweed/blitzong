import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
    title: "TOUCH",
    artist: "keshi",
    img_src: "./images/keshi-touch.jpg",
    src: "./music/touch.mp3"
    },
    {
    title: "beside you",
    artist: "keshi",
    img_src: "./images/keshi-beside-you.jpg",
    src: "./music/beside-you.mp3"
    },
    {
    title: "Stay",
    artist:  "The kid LAROI, Justin Bieber",
    img_src: "./images/the-kid-laroi-stay.jpg",
    src: "./music/stay.mp3"
    },
    {
    title: "Peaches",
    artist: "Justin Bieber , Giveon, Daniel Caesar",
    img_src: "./images/justin-bieber-peach.jpg",
    src: "./music/peaches.mp3"
    },
    {
    title: "Love yourself",
    artist: "Justin Bieber",
    img_src: "./images/justin-bieber-love-yourself.jpg",
    src: "./music/love-yourself.mp3"
    },
    {
    title: "Blinding Lights",
    artist: "The Weeknd",
    img_src: "./images/the-weeknd-blinding-lights.jpg",
    src: "./music/blinding-lights.mp3"
    },
    {
      title: "Attention",
      artist: "Justin Bieber, Omah Lay",
      img_src: "./images/justin-bieber-attention.jpg",
      src: "./music/attention.mp3"
    },
    {
      title: "Company",
      artist: "Justin Bieber",
      img_src: "./images/justin-bieber-love-yourself.jpg",
      src: "./music/Company.mp3"
    },
    {
      title: "Sanctuary",
      artist: "Joji",
      img_src: "./images/joji-sanctuary.jpg",
      src: "./music/sanctuary.mp3"
    },
    {
      title: "drunk",
      artist: "keshi",
      img_src: "./images/keshi-drunk.jpg",
      src: "./music/drunk.mp3"
    },
    {
      title: "Paris in the Rain",
      artist: "Lauv",
      img_src: "./images/paris-in-the-rain.jpg",
      src: "./music/parisintherain.mp3"
    },
    {
      title: "Just the way you are",
      artist: "Bruno Mars",
      img_src: "./images/bruno-mars-just-the-way-you-are.jpg",
      src: "./music/justthewayyouare.mp3"
    },
    {
      title: "Dynamite",
      artist: "BTS",
      img_src: "./images/bts-dynamite.jpg",
      src: "./music/dynamite.mp3"
    },
    {
      title: "Sugar",
      artist: "Maroon 5",
      img_src: "./images/maroon5-sugar.jpg",
      src: "./music/sugar.mp3"
    },
    {
      title: "Cold",
      artist: "Maroon 5 , Future",
      img_src: "./images/maroon5-cold.jpg",
      src: "./music/cold.mp3"
    },
    {
      title: "The Joker And The Queen",
      artist: "Ed Sheeran , Taylor Swift",
      img_src: "./images/eddsherran-the-joker-and-the-queen.jpg",
      src: "./music/thejokerandthequeen.mp3"
    },
    {
      title: "MidSummer Madness",
      artist: "JOJI & 88RISING",
      img_src: "./images/joji-midsummer.jpg",
      src: "./music/midsummermadness.mp3"
    },
    {
      title: "Love you different",
      artist: "Justin Bieber /w Beam",
      img_src: "./images/justin-bieber-peach.jpg",
      src: "./music/loveyoudifferent.mp3"
    },
    {
      title: "Starboy",
      artist: "The Weeknd",
      img_src: "./images/weeknd-starboy.jpg",
      src: "./music/starboy.mp3"
    },
    {
      title: "Fear & Misery",
      artist: "JOJI & PINK GUY",
      img_src: "./images/joji-fear.jpg",
      src: "./music/fearandmisery.mp3"
    },
    {
      title: "Die for you",
      artist: "VALORANT",
      img_src: "./images/valorant-dieforyou.jpg",
      src: "./music/valorant-dieforyou.mp3"
    },
    {
      title: "Die for you",
      artist: "The weeknd",
      img_src: "./images/weeknd-starboy.jpg",
      src: "./music/dieforyou.mp3"
    },
    {
      title: "I'll see you in 40",
      artist: "Joji",
      img_src: "./images/joji-40.jpg",
      src: "./music/40.mp3"
    },
    {
      title: "Light Switch",
      artist: "Charlie Puth",
      img_src: "./images/charlieputh-lightswitch.jpg",
      src: "./music/lightswitch.mp3"
    },
    {
      title: "Pain",
      artist: "PinkPantheress",
      img_src: "./images/pinkpantheress-pain.jpg",
      src: "./music/pain.mp3"
    },
    {
      title: "Hailey",
      artist: "Justin Bieber",
      img_src: "./images/justin-bieber-peach.jpg",
      src: "./music/hailey.mp3"
    },
    {
      title: "Memories",
      artist: "Maroon 5",
      img_src: "./images/maroon5-memories.jpg",
      src: "./music/memories.mp3"
    },
    {
      title: "Save Your Tears",
      artist: "The Weeknd",
      img_src: "./images/afterhour.jpg",
      src: "./music/saveyourtears.mp3"
    },
    {
      title: "Summertime in Paris",
      artist: "Jaden, WILLOW",
      img_src: "./images/ERYS.jpg",
      src: "./music/summertimeinparis.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App
