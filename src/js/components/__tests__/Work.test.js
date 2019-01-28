import React from 'react'
import renderer from 'react-test-renderer'

import {Work} from '../Work'

import defaultResume from './mockResume.json'

test('renders work section', () => {
  const data = defaultResume.work
  const component = renderer.create(<Work work={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
