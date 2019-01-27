import React, { Component } from 'react'

import { validate } from 'resume-schema'

import { Box, Heading } from 'grommet'

import { Spinning } from 'grommet-controls'

import Awards from './components/Awards'
import { Summary, Picture, Contact } from './components/Basics'
import Education from './components/Education'
import Interests from './components/Interests'
import Languages from './components/Languages'
import Publications from './components/Publications'
import References from './components/References'
import Skills from './components/Skills'
import Volunteer from './components/Volunteer'
import Work from './components/Work'

import {
  ResumeLayout,
  TopLayout,
  LeftColumnLayout,
  RightColumnLayout,
} from './components/Layout'

export const Loading = () => (
  <Box margin="auto" align="center" justify="center" height="full" width="full">
    <Spinning />
  </Box>
)

export class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = { isValid: false, error: undefined }
  }

  componentDidMount() {
    const {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    } = this.props

    const resumeData = {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    }

    const cb = (error, report) => {
      console.log('report: ', report)
      if (error) {
        this.setState({ isValid: false, error: error })
      } else {
        this.setState({ isValid: true, error: undefined })
      }
      return
    }
    validate(resumeData, cb)
  }

  render() {
    const {
      work,
      basics,
      volunteer,
      education,
      awards,
      publications,
      skills,
      languages,
      interests,
      references,
    } = this.props

    if (this.state.isValid) {
      const {
        name,
        label,
        picture,
        email,
        phone,
        website,
        summary,
        location,
        profiles,
      } = basics

      return (
        <ResumeLayout>
          <TopLayout>
            <Box align="center" justify="center">
              <Picture picture={picture} />
            </Box>

            <Summary name={name} label={label} summary={summary} />

            <Contact
              email={email}
              phone={phone}
              website={website}
              location={location}
              profiles={profiles}
            />
          </TopLayout>

          <LeftColumnLayout>
            <Box>
              <Work work={work} />
            </Box>

            <Box>
              <Education education={education} />
            </Box>
          </LeftColumnLayout>

          <RightColumnLayout>
            <Box>
              <Skills skills={skills} />
            </Box>

            <Box>
              <Interests interests={interests} />
            </Box>

            <Box>
              <Awards awards={awards} />
            </Box>

            <Box>
              <Volunteer volunteer={volunteer} />
            </Box>

            <Box>
              <Publications publications={publications} />
            </Box>

            <Box>
              <Languages languages={languages} />
            </Box>

            <Box>
              <References references={references} />
            </Box>
          </RightColumnLayout>
        </ResumeLayout>
      )
    } else if (this.state.error) {
      const errorMessage =
        this.state.error && this.state.error[0].message
          ? this.state.error[0].message
          : 'not sure what went wrong'
      return (
        <Box
          flex
          fill
          justify="center"
          wrap={true}
          height="medium"
          overflow="scroll"
          border={{ color: 'status-error', size: 'large' }}
        >
          <Heading>`Error: ${errorMessage}`</Heading>
        </Box>
      )
    } else {
      return <Loading />
    }
  }
}
