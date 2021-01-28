# profileRPC

> A custom made RPC with the discord-rpc module.

# Install

> You need **node.js >= v12 & Git!**

### Note

A few concerns were raised about this application's compliance with Discord's Terms and Conditions. I guarantee that this is risk-free as we are just using Discord's rich presence API to interact with Discord.  

### Setup

Go on the [Discord Developer Portal](https://discord.com/developers/applications) and make a new app. Click on the app, navigate to Rich Presence on the sidebar, **scroll down**, and add your assets **at the Rich Presence Assets** column.

![Demo Image](/img/demo.png "Hey! You found me!")  

### Clone

```sh
git clone https://github.com/geenva/profileRPC.git
cd profileRPC
```

### Install Dependencies

```sh
npm inst
```

The next step you want to do, is to edit the app.js file to suit your needs. Replace your Client ID from the app you made, and add custom image keys and text into the array.
### Run!

```sh
node app.js
```
