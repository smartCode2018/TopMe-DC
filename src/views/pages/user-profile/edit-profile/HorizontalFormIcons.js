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
    <Card>
      <CardHeader style={{backgroundColor:'#009688', marginBottom:20}}>
        <CardTitle style={{color:'#fff'}} tag='h4'>Update Your Profile</CardTitle>
      </CardHeader>
      <CardBody>
      <Formik 
          initialValues={{
            required: '',
            email: '',
            url: '',
            number: '',
            Address:''
          }}
          validationSchema={formSchema}
        >
          {({ errors, touched }) => (
        <Form>
          <FormGroup row>
            <Label sm='3' for='nameIcons'>
              Full Name
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <User size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameIcons' placeholder='Full Name'
                className={`form-control ${errors.required && touched.required && 'is-invalid'}`}
                />
              </InputGroup>
              <ErrorMessage name='required' component='div' className='field-error text-danger' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='EmailIcons'>
              Email
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Mail size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='email' name='Email' id='EmailIcons' placeholder='Email' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='mobileIcons'>
              Mobile
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Smartphone size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='number' name='mobile' id='mobileIcons' placeholder='Mobile' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='passwordIcons'>
              Address
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Home size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='address' id='address' placeholder='Address' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='passwordIcons'>
              Website Url
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Link size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='url' id='url' placeholder='URL' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='passwordIcons'>
              Social Media
            </Label>
            <Col sm='5'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Facebook size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='facebook' id='facebook' placeholder='Facebook' />
              </InputGroup>
            </Col>
            <Col sm='4'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Twitter size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='twitter' id='twitter' placeholder='Twitter' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='passwordIcons'>
             
            </Label>
            <Col sm='5'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Instagram size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='instagram' id='instagram' placeholder='Instagram' />
              </InputGroup>
            </Col>
            <Col sm='4'>
              <InputGroup className='input-group-merge'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Linkedin size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='linkedin' id='linkedin' placeholder='Linkedin' />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='passwordIcons'>
              About Me
            </Label>
            <Col sm='9'>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '250px' }}>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
              />
             </div>
            </Col>
          </FormGroup>

          {/* <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <CustomInput type='checkbox' id='remember-me-icons' label='Remember Me' defaultChecked={false} />
            </Col>
          </FormGroup> */}

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <div className='mr-1'>
                <Button.Ripple color='primary' type='submit'>
                  Update Record
                </Button.Ripple>
              </div>
              <Button.Ripple outline color='secondary' type='reset'>
                Reset
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}
export default HorizontalFormIcons
