import React from 'react'

import { Box, Button, Heading, Paragraph, Text } from 'grommet'

import { ResumeSection } from './common'

export const Picture = ({ picture }) => (
  <Box align="center" justify="center">
    <Button label={`${picture}`} />
  </Box>
)
Picture.defaultProps = {
  picture: 'N/A',
}

const Profiles = ({ profiles }) => {
  const profileButtons = profiles.map(profile => (
    <Button label={profile.network} key={profile.network} />
  ))

  return <Box direction="row">{profileButtons}</Box>
}

export const Contact = ({ email, phone, location, website, profiles }) => {
  const locationString = `${location.address} ${location.postalCode} ${
    location.city
  } ${location.countryCode} ${location.region}`

  return (
    <Box
      align="center"
      justify="between"
      direction="row"
      pad={{ vertical: 'small', horizontal: 'large' }}
      margin="none"
      border={{
        side: 'all',
        color: 'red',
        size: 'xsmall',
        style: 'dashed',
      }}
    >
      <Text> email: {email} </Text>

      <Text> website: {website} </Text>

      <Text> Location: {locationString} </Text>

      <Text> Phone: {phone} </Text>

      <Profiles profiles={profiles} />
    </Box>
  )
}
Contact.defaultProps = {
  email: 'N/A',
  phone: 'N/A',
  website: 'N/A',

  location: {
    address: 'No address',
    postalCode: '0',
    city: 'N/A',
    countryCode: 'FI',
    region: 'N/A',
  },
  profiles: [
    {
      network: 'Twitter',
      username: 'john',
      url: 'about:blank',
    },
  ],
}

export const Summary = ({ name, label, summary }) => {
  return (
    <ResumeSection>
      <Box basis="auto" fill wrap={false}>
        <Heading level={1} size="small" margin="xsmall">
          {name}
        </Heading>
        <Heading level={2} size="small" margin="xsmall">
          {label}
        </Heading>
        <Paragraph size="small">{summary}</Paragraph>
      </Box>
    </ResumeSection>
  )
}
Summary.defaultProps = {
  name: 'N/A',
  label: 'N/A',
  summary: 'N/A',
}
