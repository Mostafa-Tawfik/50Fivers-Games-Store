import axios from 'axios';

export default async function handler(id, res) {

  const apiRoot= 'https://rawg.io/api/games'

  await axios.get(`${apiRoot}?${process.env.rawgkey}&dates=2022-01-01,2022-04-01&ordering=-added`)
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
