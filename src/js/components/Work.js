import React from 'react'

import { Box, Heading, Text, Paragraph } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Work = ({ work }) => {
  const renderItems = work.map(item => {
    return (
      <Box key="item.company">
        <Heading level={3}>{item.company}</Heading>
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
        <SectionTitle>Work</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Work.defaultProps = {
  work: [],
}

export { Work }
