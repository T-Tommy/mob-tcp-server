const shortId = require('shortid');

module.exports = class ChatRoom {
  constructor() {
    this.clients = new Map();
  }
  add(client) {
    client.username = shortId.generate();
    this.clients.set(client.username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);

  }
};