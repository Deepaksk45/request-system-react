import { ActionTypes } from "../constants/action-types";

export const setRequests = (requests) => {
  return {
    type: ActionTypes.SET_REQUESTS,
    payload: requests,
  };
};

export const selectedRequest = (request) => {
  return {
    type: ActionTypes.SELECTED_REQUEST,
    payload: request,
  };
};

export const removeSelectedRequest = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_REQUEST,
  };
};