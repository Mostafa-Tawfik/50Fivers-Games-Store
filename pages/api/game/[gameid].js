// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler({ query: { gameid } }, res) {

  await axios({
    url: `https://api.igdb.com/v4/games/`,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': `${process.env.igdbKey}`,
        'Authorization': `${process.env.igdbToken}`,
    },
    data: `where id = ${gameid}; fields name,cover.url,rating,summary,screenshots.url,genres.name;`

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
