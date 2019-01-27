import React from 'react'

import { Box, Paragraph, Heading, Text } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const Publications = ({ publications }) => {
  const renderItems = publications.map(item => {
    return (
      <Box key="item.company">
        <Heading level={3}>{item.name}</Heading>
        <Text weight="bold" size="medium">
          {item.publisher}
        </Text>
        <Text>{item.releaseDate}</Text>
        <Paragraph>{item.summary}</Paragraph>
      </Box>
    )
  })
  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>Publications</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

Publications.defaultProps = {
  publications: [],
}

export default Publications
