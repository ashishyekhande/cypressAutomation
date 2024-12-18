const { defineConfig } = require("cypress");
module.exports = defineConfig({
videosFolder :"cypress/MyTestVideos",
screenshotsFolder : "cypress/MyScreenshots",
videoCompression: true,
video : true,
trashAssetsBeforeRuns : false ,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Mysuit/*.js'
  },
  watchForFileChanges : false,
});
