const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
} as const;

export function getStory(id: number) {
  return get(`http://api.hackerwebapp.com/item/${id}`);
}
export function getUser(id: number) {
  return get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}
export function getStories(type: keyof typeof mapStories, page: number) {
  const l = mapStories[type];
  return l ? get(`http://api.hackerwebapp.com/${l}?page=${page}`) : [];
}

async function get(href: string | URL | Request) {
  return fetch(href, {
    headers: {
      // "User-Agent": "chrome",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
    .then(e => e.json())
    .catch(e => {
      console.error(href, e);
  });
}
