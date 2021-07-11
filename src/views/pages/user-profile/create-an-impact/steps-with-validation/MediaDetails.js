import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import FileUploaderRestrictions from './file-upload/FileUploaderRestrictions'

const Address = ({ stepper, type }) => {
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      stepper.next()
    }
    event.preventDefault()
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Media Files</h5>
        <small>Upload Media Files</small>
      </div>
      <AvForm onSubmit={onSubmit}>
        <Row>
          <FormGroup tag={Col} md='12'>
          <FileUploaderRestrictions />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`video-${type}`}>
              Video Url
            </Label>
            <AvInput type='text' name={`video-${type}`} id={`video-${type}`} placeholder='' />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev'>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </AvForm>
    </Fragment>
  )
}

export default Address
