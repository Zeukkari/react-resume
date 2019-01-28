import React from 'react'
import renderer from 'react-test-renderer'

import {Interests} from '../Interests'

import defaultResume from './mockResume.json'

test('renders interests section', () => {
  const data = defaultResume.interests
  const component = renderer.create(<Interests interests={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
