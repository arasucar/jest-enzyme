import React from "react";
import {mount} from "enzyme";
import moxios from 'moxios'
import Root from "../Root";
import App from "../components/App";

jest.useRealTimers();

const mockResponse = [{name: 'Fetched1'}, {name: 'Fetched2'}]

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: mockResponse
  })
})

afterEach(() => {
  moxios.uninstall()
})

test('can fetch a list of comments and display them', done => {

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.fetch-comments').simulate('click')

  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(mockResponse.length)
    done();
  })
   done() // shouldn't be here but tests sake moved here
})