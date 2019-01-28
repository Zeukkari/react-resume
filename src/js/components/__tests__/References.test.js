import React from 'react'
import renderer from 'react-test-renderer'

import {References} from '../References'

import defaultResume from './mockResume.json'

test('renders references section', () => {
  const data = defaultResume.references
  const component = renderer.create(<References references={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
