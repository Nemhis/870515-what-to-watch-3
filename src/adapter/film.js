export default class Film {
  constructor(raw) {
    this.id = Number(raw[`id`]);
    this.name = raw[`name`];
    this.posterImg = raw[`poster_image`];
    this.previewImg = raw[`preview_image`];
    this.backgroundImg = raw[`background_image`];
    this.backgroundColor = raw[`background_color`];
    this.videoLink = raw[`video_link`];
    this.previewVideoLink = raw[`preview_video_link`];
    this.description = raw[`description`];
    this.rating = Number(raw[`rating`]);
    this.scoresCount = Number(raw[`scores_count`]);
    this.director = raw[`director`];
    this.starring = raw[`starring`];
    this.runTime = Number(raw[`run_time`]);
    this.genre = raw[`genre`];
    this.released = Number(raw[`released`]);
    this.isFavorite = Boolean(raw[`is_favorite`]);
  }

  static fromRaw(raw) {
    return new Film(raw);
  }
}
