const log = (...any) => console.log(any);
let genres = ["classic", "pop", "classic", "classic", "pop"]
let plays = [500, 600, 500, 500, 2500]
// let genres = ["pop", "pop", "pop", "pop", "pop"]
// let plays = [300, 500, 600, 600, 800]
let answer = []; //[4, 1, 3, 0]

let song_SN = {},
    song_sum = {};

for(let i = 0; i < genres.length; i++) {
  let genre = genres[i],
      play = plays[i];

  song_sum.hasOwnProperty(genre) ? song_sum[genre] += play : song_sum[genre] = play;   
  
  !song_SN.hasOwnProperty(genre) ? song_SN[genre] = [] : ''; 
  if(song_SN[genre].length < 2 || play > song_SN[genre][1][1]){
    song_SN[genre].push([i, play]);
    song_SN[genre] = song_SN[genre].sort((a, b) => b[1] - a[1]);
    song_SN[genre] = song_SN[genre].length > 2 ? song_SN[genre].slice(0, 2) : song_SN[genre];
  }
}

let sortGenres = []; 
Object.values(song_sum).sort((a, b) => b - a).forEach(play => {
  sortGenres.push(
    Object.keys(song_sum).find(key => song_sum[key] === play)
  );
});

sortGenres.forEach(genre => {
  song_SN[genre].forEach(arr => answer.push(arr[0]));
});

// log(sortGenres);
log(answer);
log("return");
