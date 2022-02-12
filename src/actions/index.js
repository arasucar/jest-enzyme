import {FETCH_COMMENTS, SAVE_COMMENT} from "./types";
import jsonPlaceholder from 'apis/jsonPlaceholder'

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export const fetchComments = () => async dispatch => {

  const response = await jsonPlaceholder.get('/comments')

  dispatch({
    type: FETCH_COMMENTS,
    payload: response
  })

}