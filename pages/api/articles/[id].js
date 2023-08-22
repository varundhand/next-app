import { article, articles } from "@/data";

// for a single article
// we destructure the 'req' their itslef to get the id and use it to filer the specific article
export default function ({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `The article with the id '${id}' not found.` });
  }
}
