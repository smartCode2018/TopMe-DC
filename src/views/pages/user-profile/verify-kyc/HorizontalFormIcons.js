import React, { useEffect, useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Form,
  Button,
  Label

} from 'reactstrap'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import FileUploaderRestrictions from './FileUploaderRestrictions'

const HorizontalFormIcons = () => {


  return (
    <Card>
      <CardHeader style={{backgroundColor:'#009688', marginBottom:20}}>
        <CardTitle style={{color:'#fff'}} tag='h4'>Account Verification</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Col sm='2'></Col>
            <Col sm='8'>
            <FileUploaderRestrictions />
            </Col>
            <Col sm='2'></Col>
          </FormGroup>
          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 10, offset: 2 }}>
              <div>
                <Button.Ripple style={{marginLeft:15}} color='primary' type='submit'>
                  Uploa Documents
                </Button.Ripple>
              </div>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default HorizontalFormIcons
