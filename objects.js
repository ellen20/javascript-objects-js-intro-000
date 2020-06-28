var playlist = {gdragon:"abc",Lee:"cde"}
function updatePlaylist(playlist,key,value){
  playlist[key]=value
  return playlist
}
function removeFromPlaylist(playlist,key){
  delete playlist.gdragon
  return playlist
}
