// SETTINGS NAVIGATION

function privacySettingNavFunc() {
  let interfaceSettingContainer = document.getElementById(
    "settings-themes-container"
  );
  let interfaceSettingInfo = document.getElementById("settings-theme-info");
  let proxySettingContainer = document.getElementById(
    "settings-proxy-container"
  );
  let proxySettingInfo = document.getElementById("settings-proxy-info");
  let privacySettingContainer = document.getElementById(
    "settings-privacy-container"
  );
  let privacySettingInfo = document.getElementById("settings-privacy-info");

  // Add and remove the classes <(-_-)>
  interfaceSettingContainer.classList.add("hidden");
  interfaceSettingInfo.classList.add("hidden");
  proxySettingContainer.classList.add("hidden");
  proxySettingInfo.classList.add("hidden");

  privacySettingContainer.classList.remove("hidden");
  privacySettingInfo.classList.remove("hidden");
}

function interfaceSettingNavFunc() {
  let interfaceSettingContainer = document.getElementById(
    "settings-themes-container"
  );
  let interfaceSettingInfo = document.getElementById("settings-theme-info");
  let proxySettingContainer = document.getElementById(
    "settings-proxy-container"
  );
  let proxySettingInfo = document.getElementById("settings-proxy-info");
  let privacySettingContainer = document.getElementById(
    "settings-privacy-container"
  );
  let privacySettingInfo = document.getElementById("settings-privacy-info");

  // Add and remove the classes <(-_-)>
  privacySettingContainer.classList.add("hidden");
  privacySettingInfo.classList.add("hidden");
  proxySettingContainer.classList.add("hidden");
  proxySettingInfo.classList.add("hidden");

  interfaceSettingContainer.classList.remove("hidden");
  interfaceSettingInfo.classList.remove("hidden");
}

function proxySettingNavFunc() {
  let interfaceSettingContainer = document.getElementById(
    "settings-themes-container"
  );
  let interfaceSettingInfo = document.getElementById("settings-theme-info");
  let proxySettingContainer = document.getElementById(
    "settings-proxy-container"
  );
  let proxySettingInfo = document.getElementById("settings-proxy-info");
  let privacySettingContainer = document.getElementById(
    "settings-privacy-container"
  );
  let privacySettingInfo = document.getElementById("settings-privacy-info");

  // Add and remove the classes <(-_-)>
  privacySettingContainer.classList.add("hidden");
  privacySettingInfo.classList.add("hidden");
  interfaceSettingContainer.classList.add("hidden");
  interfaceSettingInfo.classList.add("hidden");

  proxySettingContainer.classList.remove("hidden");
  proxySettingInfo.classList.remove("hidden");
}

// LAUNCHER NAVIGATION
function appLauncherNavFunc() {
  let appContainer = document.getElementById("launch-apps-container");
  let gameContainer = document.getElementById("launch-games-container");
  let toolContainer = document.getElementById("launch-tools-container");

  appContainer.classList.remove("hidden");
  gameContainer.classList.add("hidden");
  toolContainer.classList.add("hidden");
  console.log("clicked");
}

// TOOLBAR NAVIGATION

function toggleSettings() {
  let settingsContainer =
    document.getElementsByClassName("settings-container")[0];
  let launchContainer = document.getElementsByClassName("launch-container")[0];
  let launchCategoryContainers = document.getElementsByClassName(
    "launch-category-container"
  );

  // Close Launcher
  launchContainer.classList.add("hidden");
  Array.from(launchCategoryContainers).forEach((element) => {
    element.classList.add("hidden");
  });
  // Toggle Settings
  settingsContainer.classList.toggle("hidden");
}

function toggleLauncher() {
  let launchContainer = document.getElementsByClassName("launch-container")[0];
  let launchCategoryContainers = document.getElementsByClassName(
    "launch-category-container"
  );
  let gameContainer = document.getElementById("launch-games-container");
  let gameViewer = document.getElementsByClassName("game-container")[0];
  let settingsContainer =
    document.getElementsByClassName("settings-container")[0];
  // Toggle Launcher
  launchContainer.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");

  // Close Settings
  settingsContainer.classList.add("hidden");
  gameViewer.classList.add("hidden");
}

function toggleSearch(params) {
  let searchContainer = document.getElementsByClassName("search-container")[0];
  searchContainer.classList.toggle("hidden");
}
