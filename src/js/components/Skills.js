import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Skills = ({ skills }) => {
  const renderItems = skills.map(item => {
    return (
      <Box key="item.name">
        <Heading level={3}>{item.name}</Heading>
        <Box direction="row">
          <Text>{item.level}</Text>
        </Box>
        <Text weight="bold" size="medium">
          Highlights
        </Text>
        <Box direction="row">
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
        <SectionTitle>Skills</SectionTitle>
        <Box direction="column">{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Skills.defaultProps = {
  skills: [],
}

export { Skills }
