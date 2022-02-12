import React from 'react'
import {mount} from 'enzyme'

import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapped


beforeEach(() =>
  wrapped = mount(<Root><CommentBox/></Root>) // to provide the CommentBox with a store
)                                             // CommentBox is wrapped with Root

afterEach(() => {
  wrapped.unmount()
})

test('has a text area', () => {
  expect(wrapped.find('textarea').length).toBeGreaterThan(0)
})

test('has a button', () => {
  expect(wrapped.find('button').length).toBeGreaterThan(0)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    })
    wrapped.update()
  })

  test('has a text area that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  test('after form submitted the textarea value is null', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})

