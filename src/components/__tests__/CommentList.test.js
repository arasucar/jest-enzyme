import React from "react";
import {mount} from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped

const initialState = {
  comments: ['comment1', 'comment2']
}

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

test('creates one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(initialState.comments.length)
})

test('shows the text for each comment', () => {
  initialState.comments.map(comment => {
    expect(wrapped.render().text()).toContain(comment)
  })
})