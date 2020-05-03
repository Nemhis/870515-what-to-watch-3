import Film from '../../adapter/film';
import Comment from '../../adapter/comment';

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFilms(data));
      })
      .catch((response) => {
        throw response;
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(ActionCreator.loadPromoFilm(data));
      })
      .catch((response) => {
        throw response;
      });
  },

  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then(({data}) => {
        dispatch(ActionCreator.loadComments(filmId, data));
      })
      .catch((response) => {
        throw response;
      });
  }
};

const ActionCreator = {
  loadFilms(films) {
    films = films.map((film) => Film.fromRaw(film));

    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },

  loadPromoFilm(film) {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: Film.fromRaw(film),
    };
  },

  loadComments(filmId, comments) {
    comments = comments.map((comment) => Comment.fromRaw(comment));

    return {
      type: ActionType.LOAD_COMMENTS,
      payload: {
        filmId,
        comments,
      },
    };
  },
};

export {ActionType, ActionCreator, Operation};
