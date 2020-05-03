import dayjs from 'dayjs';

import User from './user';

export default class Comment {
  constructor(raw) {
    this.id = Number(raw[`id`]);
    this.user = User.fromRaw(raw[`user`]);
    this.rating = Number(raw[`rating`]);
    this.comment = raw[`comment`];
    this.date = dayjs(raw[`date`]).toDate();
  }

  static fromRaw(raw) {
    return new Comment(raw);
  }
}
