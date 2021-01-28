"use strict";

/* eslint-disable no-console */

const DiscordRPC = require("./src");

const imgs = [
  ["gen", "geneva"],
  ["dot", ".dot"],
  ["friday", "friday the cat"],
];

// Set this to your Client ID.
const clientId = "804140853576597514";

// Only needed if you want to use spectate, join, or ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: "ipc" });
const startTimestamp = new Date();

const setActivity = async function () {
  let largeRand = imgs[Math.floor(Math.random() * imgs.length)];
  let smallRand = imgs[Math.floor(Math.random() * imgs.length)];

  while (largeRand === smallRand) {
    smallRand = imgs[Math.floor(Math.random() * imgs.length)];
  }

  rpc.setActivity({
    details: "Responses will be delayed",
    state: "Unavailable",
    startTimestamp,
    largeImageKey: largeRand[0],
    largeImageText: "m@inkthought.codes",
    smallImageKey: smallRand[0],
    smallImageText: smallRand[1],
    instance: false,
    buttons: [
      {
        label: "try out honkers!",
        url:
          "https://discord.com/oauth2/authorize?client_id=693035835452424193&scope=bot&permissions=76848",
      },
      { label: "my profile", url: "https://dsc.bio/gen" },
    ],
  });
};

rpc.on("ready", () => {
  try {
    setActivity();
  } catch (e) {
    console.log(e);
  }
  console.log("Ready!");
  // activity can only be set every 15 seconds
  setInterval(() => {
    try {
      setActivity().then(console.log("Updated status!"));
    } catch (e) {
      console.log(e);
    }
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);
