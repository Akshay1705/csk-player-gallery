const playerGallery = document.getElementById("playerGallery");

function createPlayerCard(player) {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const img = document.createElement("img");
  img.src = player.image;
  img.alt = player.name;

  const name = document.createElement("div");
  name.className = "player-name";
  name.textContent = player.name;

  item.appendChild(img);
  item.appendChild(name);

  return item;
}

function showCategory(category = "all") {
  playerGallery.innerHTML = "";

  const filteredPlayers =
    category === "all"
      ? players
      : players.filter((player) => player.categories.includes(category));

  if (filteredPlayers.length === 0) {
    playerGallery.innerHTML =
      '<p style="color:#f5c518; grid-column:1/-1;">No players found in this category.</p>';
    return;
  }

  filteredPlayers.forEach((player) => {
    const playerCard = createPlayerCard(player);
    playerGallery.appendChild(playerCard);
  });
}

// Load all players when page loads
showCategory("all");
