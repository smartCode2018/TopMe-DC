import React, { useEffect, useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  //Form,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import { User, Link, Facebook, Twitter, Instagram, Linkedin, Home, Mail, Smartphone, Lock } from 'react-feather'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Editor } from "react-draft-wysiwyg"
import { EditorState } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import FileUploaderRestrictions from './FileUploaderRestrictions'

const formSchema = Yup.object().shape({
  required: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.number().required('Required'),
  url: Yup.string().url().required('Required'),
  address: Yup.string().required('Required'),
  minlength: Yup.string().min(4, 'Too Short!').required('Required'),
  maxlength: Yup.string().max(5, 'Too Long!').required('Required')
})

const HorizontalFormIcons = () => {

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  useEffect(() => {
    console.log(editorState)
  }, [editorState])

  return (

      <Formik 
          initialValues={{
            title: '',
            videoUrl: ''
          }}
          validationSchema={formSchema}
        >
          {({ errors, touched }) => (
        <Form>
          <Col sm='12'>
          <FormGroup>
            <Label for='nameIcons'>
              Full Name
            </Label>
                <Input type='text' name='title' id='nameIcons' placeholder='Title'
                className={`form-control ${errors.required && touched.required && 'is-invalid'}`}
                />
              <ErrorMessage name='title' component='div' className='field-error text-danger' />
          </FormGroup>
          </Col>
          <Col sm='12'>
          <FormGroup>
            <Label for='nameIcons'>
              Video Url
            </Label>
                <Input type='text' name='videoUrl' id='nameIcons' placeholder='Video Url'
                className={`form-control ${errors.required && touched.required && 'is-invalid'}`}
                />
              <ErrorMessage name='videoUrl' component='div' className='field-error text-danger' />
          </FormGroup>
          </Col>
          <Col sm='12'>
            <FormGroup>
              <Label for='passwordIcons'>
                Content
              </Label>
              <div style={{ border: "1px solid black", padding: '2px', minHeight: '250px' }}>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                />
              </div>
          </FormGroup>
          </Col>
          <Col md='12'>
            <FileUploaderRestrictions />
          </Col>
          {/* <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me-icons' label='Remember Me' defaultChecked={false} />
            </Col>
          </FormGroup> */}
          <Col sm='6'>
          <FormGroup>
              <div>
                <Button.Ripple color='primary' type='submit'>
                  Update Story
                </Button.Ripple>
              </div>
          </FormGroup>
          </Col>
        </Form>
          )}
        </Formik>

  )
}
export default HorizontalFormIcons
