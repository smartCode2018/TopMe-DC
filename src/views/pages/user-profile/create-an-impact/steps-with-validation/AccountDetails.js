import { Fragment, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation-safe'

const AccountDetails = ({ stepper, type }) => {

  const onSubmit = (event, errors) => {
    if (!errors.length) {
      // if (password === confirmPassword) {
      //   stepper.next()
      // } else {
      //   alert('Passwords do not match')
      // }
    }
    event.preventDefault()
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Impact Details</h5>
        <small className='text-muted'>Enter Your Impact Details.</small>
      </div>
      <AvForm onSubmit={onSubmit}>
        <Row>
          <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`title-${type}`}>
              Impact Title
            </Label>
            <AvInput required type='text' name={`title-${type}`} id={`title-${type}`} placeholder='' />
          </FormGroup>
        </Row>
        <Row>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for='category'>
              Select Category
            </Label>
            <AvField type='select' name='category' id='category' required>
              <option>Category A</option>
              <option>Category B</option>
              <option>Category C</option>
              <option>Category D</option>
            </AvField>
            {/* <AvFeedback>Please select a category</AvFeedback> */}
          </div>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for={`amount-${type}`}>
              Amount Needed
            </Label>
            <AvInput
              required
              type='number'
              name={`amount-${type}`}
              id={`amount-${type}`}
            />
          </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
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

export default AccountDetails
