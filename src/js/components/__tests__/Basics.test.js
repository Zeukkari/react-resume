import React from 'react'
import renderer from 'react-test-renderer'

import { Contact, Summary, Picture } from '../Basics'

import defaultResume from './mockResume.json'

test('renders basics section summary', () => {
  const { name, label, summary } = defaultResume.basics
  const component = renderer.create(
    <Summary name={name} label={label} summary={summary} />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders basics section picture', () => {
  const picture = defaultResume.basics.picture
  const component = renderer.create(<Picture picture={picture} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders basics section contact info', () => {
  const { email, phone, location, website, profiles } = defaultResume.basics
  const component = renderer.create(
    <Contact
      email={email}
      phone={phone}
      location={location}
      website={website}
      profiles={profiles}
    />,
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
