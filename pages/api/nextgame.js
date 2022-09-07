export default async function handler(req, res) {
  // 2
  const res_ = await fetch(
    "https://api.sofascore.com/api/v1/team/36268/events/next/0"
  );

  const data = await res_.json();

  res.status(200).json(data);
}
//
