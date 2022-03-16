// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler({ query: { gamename } }, res) {

  await axios({
    url: `https://api.igdb.com/v4/games/?fields=name,cover.url,storyline,summary,screenshots.url,genres.name,first_release_date,rating,slug&sort=rating=desc&search=${gamename}`,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': `${process.env.igdbKey}`,
        'Authorization': `${process.env.igdbToken}`,
    },
    data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"

  })
  .then(response => {
    const data = res.json(response.data)
    res.status(200).end();
    return data
  })
  .catch(err => {
    res.json(err);
    res.status(405).end();
  })
}
