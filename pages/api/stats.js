const cheerio = require("cheerio"); // 1

export default async function handler(req, res) {
  // 2
  const res_ = await fetch(
    "https://api.sofascore.com/api/v1/unique-tournament/937/season/45552/standings/total"
  );

  const data = await res_.json();

  res.status(200).json(data);
}

//AllPlayers ==> https://api.sofascore.com/api/v1/team/36268/players
//1player ==> https://api.sofascore.com/api/v1/player/359290/unique-tournament/1054/season/38336/statistics/overall
//PlayerEvents ==> https://api.sofascore.com/api/v1/player/919677/events/last/0

//2a7dat ==> /incidents
//LastGames ==> /last/ 0-1-2-3-4-5 ...
