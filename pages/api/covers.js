import React from 'react'
import axios from 'axios';
import useSWR from 'swr'

export default async function handler(id, res) {

  await axios({
    url: "https://api.igdb.com/v4/covers",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '3gme7daiuncpui724oa7bo0abveygb',
        'Authorization': 'Bearer 4xtwp8lwnvc6ez5k7y15yi0706l0br',
    },
    data : `where id = 203450; fields alpha_channel,animated,checksum,game,height,image_id,url,width;`

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