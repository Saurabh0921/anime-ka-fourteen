window.allAnime = [
  { title: "Berserk", genre: "Seinen", link: "berserk.html" },
  { title: "Monster", genre: "Seinen", link: "monster.html" },
  { title: "Naruto", genre: "Shonen", link: "naruto.html" },
  { title: "Attack on Titan", genre: "Shonen", link: "aot.html" },
  { title: "Kaguya-sama", genre: "Romance", link: "kaguya.html" },
  { title: "Death Note", genre: "Psychological", link: "deathnote.html" },
  { title: "My Hero Academia", genre: "Shonen", link: "myhero.html" },
  { title: "One Piece", genre: "Shonen", link: "onepiece.html" },
  { title: "Ergo Proxy", genre: "Seinen", link: "ergoproxy.html" },
  // add more...
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("globalSearchBar");
  const resultsBox = document.getElementById("globalSearchResults");

  input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase().trim();
    if (!keyword) {
      resultsBox.innerHTML = "";
      resultsBox.classList.add("hidden");
      return;
    }

    const matches = window.allAnime.filter(anime =>
      anime.title.toLowerCase().includes(keyword) ||
      anime.genre.toLowerCase().includes(keyword)
    );

    if (matches.length === 0) {
      resultsBox.innerHTML = `<div class="px-4 py-2 text-gray-400">No results found.</div>`;
    } else {
      resultsBox.innerHTML = matches.map(anime => `
        <a href="${anime.link}" class="block px-4 py-2 hover:bg-red-500 hover:text-black transition">
          <div class="font-semibold text-red-400">${anime.title}</div>
          <div class="text-sm text-gray-400">${anime.genre}</div>
        </a>
      `).join("");
    }

    resultsBox.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.classList.add("hidden");
    }
  });
});