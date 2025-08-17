const debugMode = false;

fetch("./games/config.json")
  .then((res) => res.json())
  .then((games) => {
    const launcher = document.getElementById("launch-games-container");
    games.forEach((game) => {
      let gameName = game.name;
      let gameImage = game.icon;
      let gamePath = game.path;
      if (debugMode == true) {
        if (!gameName) {
          console.warn("A game is missing a name. Check config.json.");
        } else {
          console.log(gameName, "found in config.json.");
        }
        if (!gameImage) {
          console.warn(gameName, "is missing an image.");
        } else {
          console.log("Loaded icon for", gameName);
        }
        if (!gamePath) {
          console.warn("I can't seem to find the game data for", gameName);
        } else {
          console.log("Found game data for", gameName);
        }
      }

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("launch-button-div");

      const gameButton = document.createElement("button");
      gameButton.classList.add("launch-button");
      gameButton.onclick = () => launchGame(gameName, gamePath);

      const buttonImg = document.createElement("img");
      buttonImg.src = gameImage;
      buttonImg.alt = gameName;
      buttonImg.draggable = false;

      gameButton.appendChild(buttonImg);
      buttonDiv.appendChild(gameButton);
      launcher.appendChild(buttonDiv);
    });
  });
function launchGame(name, gamePath) {
  console.log("Launching", name);
  // Close Launcher
  let launchContainer = document.getElementsByClassName("launch-container")[0];
  let launchCategoryContainers = document.getElementsByClassName(
    "launch-category-container"
  );

  launchContainer.classList.toggle("hidden");
  Array.from(launchCategoryContainers).forEach((element) => {
    element.classList.add("hidden");
  });
  // Open Game Container
  const gameContainer = document.getElementsByClassName("game-container")[0];
  gameContainer.classList.remove("hidden");

  // Open Iframe
  const gamesInContainer = gameContainer.children;
  Array.from(gamesInContainer).forEach((element) => {
    element.remove();
  });
  const gameIframe = document.createElement("iframe");
  gameIframe.src = gamePath;
  gameIframe.width = "100%";
  gameIframe.height = "100%";
  gameIframe.frameBorder = 0;
  gameIframe.classList.add("game-iframe");

  gameContainer.appendChild(gameIframe);
}

/*

      <div class="launch-button-div">
        <button class="launch-button">
          <img src="../public/icons/xboxlogo.png" alt="" draggable="false" />
        </button>
      </div>

*/
