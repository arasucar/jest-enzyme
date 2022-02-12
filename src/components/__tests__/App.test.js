import React from 'react'
import {shallow} from 'enzyme'
import App from 'components/App'
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />) // wrapped version of component
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toBeGreaterThan(0)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toBeGreaterThan(0)
})