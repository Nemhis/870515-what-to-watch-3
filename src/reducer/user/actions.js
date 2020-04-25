const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization(status) {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status,
    };
  }
};

export {ActionType, ActionCreator};
