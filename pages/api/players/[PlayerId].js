// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PlayersData } from "../../../data/Players"

export default function handler(req, res) {
  const {PlayerId} = req.query;
  const FilteredPlayer = PlayersData.find(Player => Player.id === parseInt(PlayerId));
  res.status(200).json(FilteredPlayer)
}