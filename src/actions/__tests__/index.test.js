import {SAVE_COMMENT} from "../types";
import {saveComment} from "../index";

describe('saveComment', () => {

  test('has the correct type', () => {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  test('has the correct payload', () => {
    const action = saveComment('New Comment')

    expect(action.payload).toEqual('New Comment')
  })
})