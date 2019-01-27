import React from 'react'

import { Box, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Languages = ({ languages }) => {
  const renderItems = languages.map(item => {
    return (
      <Box key="item.language">
        <Heading level={3}>{item.language}</Heading>
        <Text weight="bold" size="medium">
          {item.fluency}
        </Text>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Languages</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Languages.defaultProps = {
  language: [],
}

export { Languages }
