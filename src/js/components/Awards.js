import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Awards = ({ awards }) => {
  const renderItems = awards.map(item => {
    return (
      <Box key={item.title}>
        <Heading level={3}>{item.title}</Heading>
        <Heading level={4}>{item.awarder}</Heading>
        <Text weight="bold" size="medium">
          {item.date}
        </Text>
        <Paragraph>{item.summary}</Paragraph>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Awards</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Awards.defaultProps = {
  awards: [],
}

export { Awards }
