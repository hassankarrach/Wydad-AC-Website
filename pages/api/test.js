const cheerio = require("cheerio"); // 1

export default async function handler(req, res) {
  // 2
  const res_ = await fetch(
    "https://api.sofascore.com/api/v1/team/36268/unique-tournament/1054/season/38336/top-players/overall"
  );

  const data = await res_.json();

  res.status(200).json(data);
}
