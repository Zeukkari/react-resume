import React from 'react'

import { Box, Heading } from 'grommet'

export const ResumeSection = ({ children }) => (
  <Box
    border={{
      side: 'all',
      color: 'red',
      size: 'xsmall',
      style: 'dashed',
    }}
    margin="none"
    pad="none"
  >
    {children}
  </Box>
)

export const SectionTitle = ({ children }) => (
  <Heading level={1} size="medium" align="left">
    {children}
  </Heading>
)
