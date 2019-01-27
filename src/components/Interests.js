import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Interests = ({ interests }) => {
  const renderItems = interests.map(item => {
    return (
      <Box key="item.name">
        <Heading level={3}>{item.name}</Heading>
        <Text weight="bold" size="medium">
          Keywords
        </Text>
        <Box direction="column">
          {item.keywords.map(keyword => (
            <Text key={keyword}>{keyword}</Text>
          ))}
        </Box>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Interests</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Interests.defaultProps = {
  language: [],
}

export default Interests
