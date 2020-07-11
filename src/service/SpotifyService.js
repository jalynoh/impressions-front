export const getLastFiftyImpressions = async (token, date) => {
  let recentlyPlayedData, audioFeaturesData;

  try {
    // Call Spotify recently played API
    recentlyPlayedData = await getRecentlyPlayed(token, date);
    let trackIds = [];
    recentlyPlayedData.items.forEach(item => trackIds.push(item.track.id));
    // Call Spotify audio features API
    audioFeaturesData = await getAudioFeatures(token, trackIds);
  } catch (err) {
    console.error(err);
    return ("ERROR");
  }

  // Link artists to valence and return list with { artists: <example>, track: <example>, valence: <example> }

  // Calculate average
  let valenceAvg = 0;
  audioFeaturesData.audio_features.forEach(audioFeature => valenceAvg += audioFeature.valence);
  valenceAvg = valenceAvg / audioFeaturesData.audio_features.length;

  console.log(Math.round(valenceAvg * 100));
  return Math.round(valenceAvg * 100);
}

const getRecentlyPlayed = (token, date) => {
  const baseUrl = "https://api.spotify.com/v1/me/player/recently-played";
  const limit = 50; // Spotify max
  date.setHours(23,59,59,999);
  const before = (date.valueOf()) * 1000; // Unix time in milliseconds

  let recentlyPlatedUrl = new URL(baseUrl);
  recentlyPlatedUrl.searchParams.append("limit", limit);
  recentlyPlatedUrl.searchParams.append("before", before);

  const options = {
    method: 'GET',
    headers: new Headers({ "Authorization": "Bearer " + token})
  };

  return fetch(recentlyPlatedUrl, options)
    .then(resp =>  {
      if (resp.ok) {
        return resp.json();
      } else {
        console.error(resp);
        return("ERROR");
      }
    }).catch(err => {
      console.error(err);
      return("ERROR");
    });
}

const getAudioFeatures = (token, trackIds) => {
  const baseUrl = "https://api.spotify.com/v1/audio-features";

  let audioFeaturesUrl = new URL(baseUrl);
  audioFeaturesUrl.searchParams.append("ids", trackIds);

  const options = {
    method: 'GET',
    headers: new Headers({ "Authorization": "Bearer " + token})
  };

  return fetch(audioFeaturesUrl, options)
    .then(resp =>  {
      if (resp.ok) {
        return resp.json();
      } else {
        console.error(resp);
        return("ERROR");
      }
    }).catch(err => {
      console.error(err);
      return("ERROR");
    });
}

