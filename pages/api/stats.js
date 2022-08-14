const cheerio = require("cheerio"); // 1

export default async function handler(req, res) {
  // 2
  const res_ = await fetch(
    "https://api.sofascore.com/api/v1/tournament/3640/season/38546/standings/total"
  );

  const data = await res_.json();

  res.status(200).json(data);
}
