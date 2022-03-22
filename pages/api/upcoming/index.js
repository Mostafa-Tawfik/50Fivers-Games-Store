// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {

  await axios({
    url: `https://api.igdb.com/v4/release_dates/`,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': `${process.env.igdbKey}`,
        'Authorization': `${process.env.igdbToken}`,
    },
    data: `fields *; where game.platforms = 167 & date > 1647948438 ; sort date asc; `

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
