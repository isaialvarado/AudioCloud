export const tracksArray = (tracks) => (
  Object.keys(tracks).map(key => tracks[key])
)

// console.log(tracks);
// const tracks_array = [];
// // if(start.tracks === undefined || state.tracks.tracks === undefined) return tracks;
// if(tracks !== null){
//   Object.keys(tracks).forEach(trackId => {
//     let currentTitle = tracks[trackId].title.toLowerCase();
//     let searchEntry = tracks.toLowerCase();
//     if(currentTitle.includes(searchEntry)){
//       tracks_array.push(tracks[trackId]);
//     }
//   });
// }
// return tracks_array;
