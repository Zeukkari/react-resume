import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Volunteer = ({ volunteer }) => {
  const renderItems = volunteer.map(item => {
    return (
      <Box key="item.company">
        <Heading level={3}>{item.company}</Heading>
        <Text weight="bold" size="medium">
          {item.position}
        </Text>
        <Box direction="row">
          {item.startDate} - {item.endDate}
        </Box>
        <Paragraph>{item.summary}</Paragraph>
        <Text weight="bold" size="medium">
          Highlights
        </Text>
        <Box direction="column">
          {item.highlights.map(highlight => (
            <Text key={highlight}>{highlight}</Text>
          ))}
        </Box>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Volunteer</SectionTitle>

        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Volunteer.defaultProps = {
  volunteer: [],
}

export { Volunteer }
