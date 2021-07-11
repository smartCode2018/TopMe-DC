import { Fragment, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation-safe'

import { Editor } from "react-draft-wysiwyg"
import { EditorState } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const ImpactDetails = ({ stepper, type }) => {
  const onSubmit = (event, errors) => {
    if (!errors.length) {
        stepper.next()
    }
    event.preventDefault()
  }

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  useEffect(() => {
    console.log(editorState)
  }, [editorState])

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
        <Row>
        <FormGroup tag={Col} md='12'>
            <Label className='form-label' for={`description-${type}`}>
              Tell Your Story
            </Label>
            <Col sm='12'>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '250px' }}>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
              />
             </div>
            </Col>
          </FormGroup>
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

export default ImpactDetails
