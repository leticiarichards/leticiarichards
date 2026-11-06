/* ===== YOUR ARTICLE LIST =====
   Every time you publish a piece:
   1. Save the article page in the "articles" folder (copy article-template.html).
   2. Put its image in the "images" folder.
   3. Add an entry below, newest at the top. Copy the example and change the details.

   countries: list every country the piece covers. The homepage search
   and the country buttons are built from these automatically.
   image: leave as "" if you don't have one yet; the card shows the country name instead.
*/
const POSTS = [
  {
    title: "Your first article title goes here",
    countries: ["United Kingdom"],
    section: "Politics & Policy",
    date: "November 2026",
    image: "",
    excerpt: "One or two lines on the 'so what' of the piece. This is what shows on the homepage card.",
    link: "articles/article-template.html"
  }

  /* Example of a second entry — remove the slashes and stars to use it:
  ,{
    title: "Another article",
    countries: ["Brazil", "Chile"],
    section: "Money & Deals",
    date: "December 2026",
    image: "images/brazil.jpg",
    excerpt: "Short summary here.",
    link: "articles/brazil-example.html"
  }
  */
];

/* Other names people might type, so the search still finds the country. */
const COUNTRY_ALIASES = {
  "united kingdom": ["uk", "britain", "great britain", "england", "scotland", "wales", "northern ireland"],
  "united states": ["us", "usa", "america"],
  "netherlands": ["holland", "dutch"],
  "united arab emirates": ["uae"]
};
