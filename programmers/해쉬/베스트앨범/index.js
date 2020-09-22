const log = (...any) => console.log(any);
// let genres = ["classic", "pop", "classic", "classic", "pop"]
// let plays = [500, 600, 500, 500, 2500]
let genres = ["pop", "pop", "rock", "lock", "tab"]
let plays = [500, 500, 500, 600, 800]
let answer = []; //[4, 1, 3, 0]

let song_SN = {},
    song_sum = {};

for(let i = 0; i < genres.length; i++) {
  let genre = genres[i],
      play = plays[i];

  song_sum.hasOwnProperty(genre) ? song_sum[genre] += play : song_sum[genre] = play;   
  
  !song_SN.hasOwnProperty(genre) ? song_SN[genre] = {} : ''; 
  if(Object.keys(song_SN[genre]).length < 2){
    song_SN[genre][i] = play;
  }else {
    let keys = Object.keys(song_SN[genre]);
    let count = 0;
    for(let key of keys) {
      if(song_SN[genre][key] < play) {
        if(count++ == 0) {
          delete song_SN[genre][keys[1]];
        } else {
          delete song_SN[genre][key];
        }
        song_SN[genre][i] = play;
        break;
      }
    }
  }
}

let sortGenres = []; 
Object.values(song_sum).sort((a, b) => b - a).forEach(play => {
  sortGenres.push(
    Object.keys(song_sum).find(key => song_sum[key] === play)
  );
});

sortGenres.forEach(genre => {
  let song = song_SN[genre];
  let plays = Object.values(song);
  if(plays[0] === plays[1]) {
    Object.keys(song).sort((a, b) => a - b).forEach(i => answer.push(parseInt(i)));
  } else {
    plays.sort((a, b) => b - a).forEach(play => {
      answer.push(parseInt(Object.keys(song).find(key => song[key] == play)));
    }); 
  }
});

// log(sortGenres);
log(answer);

log("return");
