export default class User {
  constructor(raw) {
    this.id = Number(raw[`id`]);
    this.email = raw[`email`];
    this.name = raw[`name`];
    this.avatarUrl = raw[`avatar_url`];
  }

  static fromRaw(raw) {
    return new User(raw);
  }
}
