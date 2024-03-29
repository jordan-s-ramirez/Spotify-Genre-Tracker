import React, {useState, useEffect} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { View } from 'react-native-web';

function WebPlayer(props) {
  const [gotInfo, setGotInfo] = useState(false)
  const [token, setToken] = useState("")
  const [songs, setSongs] = useState([])
  const [songIndex, setSongIndex] = useState(0)
  // const ready = useWebPlaybackSDKReady()
  useEffect(()=>{
    if(props.token.length !== 0) {
      setToken(props.token)
      // Extract Songs
      var songList = []
      for(var i = 0; i < props.songs.length; i++) {
        songList.push(props.songs[i].uri)
      }
      setSongs(songList)
      setSongIndex(props.index)
      // console.log(ready + " <- IS ready")
      setGotInfo(true)
      
    }
  },[props])

  return (
    <View>
      {gotInfo?(
        <SpotifyPlayer 
          offset={songIndex} 
          token={token} 
          uris={songs} 
          initialVolume={0.5}
          callback = {(state) => {
            console.log(state)
          }}
        /> 
      ):(null)}
    </View>
  )
}

export default WebPlayer