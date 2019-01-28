import React from 'react'
import renderer from 'react-test-renderer'

import {Volunteer} from '../Volunteer'

import defaultResume from './mockResume.json'

test('renders volunteer section', () => {
  const data = defaultResume.volunteer
  const component = renderer.create(<Volunteer volunteer={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
