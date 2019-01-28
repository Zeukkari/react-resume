import React from 'react'
import renderer from 'react-test-renderer'

import {Publications} from '../Publications'

import defaultResume from './mockResume.json'

test('renders publications section', () => {
  const data = defaultResume.publications
  const component = renderer.create(<Publications publications={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
