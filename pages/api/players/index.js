// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PlayersData } from "../../../data/Players";

export default function handler(req, res) {
  res.status(200).json(PlayersData);
}
