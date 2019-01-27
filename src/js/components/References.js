import React from 'react'

import { Box, Heading, Paragraph } from 'grommet'

import { ResumeSection, SectionTitle } from './common'

const References = ({ references }) => {
  const renderItems = references.map(item => {
    return (
      <Box key="item.name">
        <Heading level={3}>{item.name}</Heading>
        <Paragraph>{item.reference}</Paragraph>
      </Box>
    )
  })

  return (
    <Box margin="none" pad="none" border="all">
      <ResumeSection>
        <SectionTitle>References</SectionTitle>
        <Box>{renderItems}</Box>
      </ResumeSection>
    </Box>
  )
}

References.defaultProps = {
  references: [],
}

export { References }
