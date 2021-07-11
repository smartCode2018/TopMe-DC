import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import FileUploaderRestrictions from './file-upload/FileUploaderRestrictions'

const PartnersDetails = ({ stepper, type }) => {
    const onSubmit = (event, errors) => {
        if (!errors.length) {
          alert('submitted')
        }
        event.preventDefault()
      }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>If You Are Working With A Thirdparty</h5>
        <small>Add their details here</small>
      </div>
      <AvForm onSubmit={onSubmit}>
      <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`pname-${type}`}>
              Partner Name
            </Label>
            <AvInput type='text' name={`pname-${type}`} id={`pname-${type}`} placeholder='' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`paddress-${type}`}>
              Partner Address
            </Label>
            <AvInput type='text' name={`paddress-${type}`} id={`paddress-${type}`} placeholder='' />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`pnumber-${type}`}>
              Patners Number
            </Label>
            <AvInput type='text' name={`pnumber-${type}`} id={`pnumber-${type}`} placeholder='' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`purl-${type}`}>
              Wbsite Url
            </Label>
            <AvInput type='text' name={`purl-${type}`} id={`purl-${type}`} placeholder='' />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='12'>
          <FileUploaderRestrictions />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='success' className='btn-submit'>
            Submit
          </Button.Ripple>
        </div>
      </AvForm>
    </Fragment>
  )
}

export default PartnersDetails
