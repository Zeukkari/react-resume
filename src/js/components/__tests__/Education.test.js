import React from 'react'
import renderer from 'react-test-renderer'

import {Education} from '../Education'

import defaultResume from './mockResume.json'

test('renders education section', () => {
  const data = defaultResume.education
  const component = renderer.create(<Education education={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
