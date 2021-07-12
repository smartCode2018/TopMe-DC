// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import { Chrono } from "react-chrono"

// ** Store & Actions
import { getUser } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, TabContent, Modal, ModalHeader, ModalBody, ModalFooter, TabPane, Media, Nav, NavItem, NavLink, Col, Alert, Progress, Card, CardHeader, CardImg, CardTitle, CardBody, CardText, Button } from 'reactstrap'

// ** User View Components
import UserTimeline from './UserTimeline'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Styles
import '@styles/react/apps/app-users.scss'

import {
  Cpu,
  TrendingUp,  User
} from 'react-feather'

import img1 from '@src/assets/images/topme/gallery5.jpg'
import CardChat from './CardChat'
import HorizontalForm from './HorizontalFormIcons'

const items = [
  {
  title: "May 1940",
  cardTitle: "Dunkirk",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: `Men of the British Expeditionary Force (BEF) wade out to What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has
  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged`,
  media: {
    type: "IMAGE",
    source: {
      url: 'http://localhost:3000/static/media/gallery5.fd1376df.jpg'
    }
  }
},
{
  title: "May 1940",
  cardTitle: "Dunkirk",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  media: {
    type: "IMAGE",
    source: {
      url: {img1}
    }
  }
},
{
  title: "May 1940",
  cardTitle: "Dunkirk",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  media: {
    type: "IMAGE",
    source: {
      url: {img1}
    }
  }
},
{
  title: "May 1940",
  cardTitle: "Dunkirk",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has
  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged`,
  media: {
    type: "IMAGE",
    source: {
      url: {img1}
    }
  }
}
] 

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.users),
    dispatch = useDispatch(),
    { id } = useParams()

  const [centeredModal, setCenteredModal] = useState(false)

  // im using this instead
  const story = {
    id: 2,
    fullName: 'Help Eze Go To School',
    company: 'Skinder PVT LTD',
    role: 'author',
    username: 'hredmore1',
    country: 'Albania',
    contact: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: require('@src/assets/images/avatars/10.png').default
  }

  const [active, setActive] = useState('1')
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <>
    <Breadcrumbs breadCrumbTitle='Help Eze Go To School' breadCrumbParent='Impact' breadCrumbActive='Story Details' />
    <div className='app-user-view'>
      <Row>
        <Col lg='4' sm='6'>
          <StatsHorizontal icon={<TrendingUp size={21} />} color='primary' stats='₦15,000,000' statTitle='Needed' />
        </Col>
        <Col lg='4' sm='6'>
          <StatsHorizontal icon={<Cpu size={21} />} color='success' styles={{color:'#04d697'}} stats='₦8,000,000' statTitle='Donated' />
        </Col>
        <Col lg='4' sm='6'>
          <StatsHorizontal icon={<User size={21} />} color='info' stats='130' statTitle='Donors' />
        </Col>
      </Row>
      <Row>
        <Col md='10'>
       
          <Card>
            <CardBody>
                <Progress striped className='progress-bar-success' value={40}>
                      40%
              </Progress>
            </CardBody>
          </Card>
          
        </Col>
        <Col md='2'>
          <Button className='send'  color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
            Update Timeline
          </Button>
        </Col>
      </Row>
      {/* <Row>
        <Col md='12'>
          <Card>
         
            <CardHeader style={{backgroundColor:'#009688', marginBottom:20}}>
              <CardTitle style={{color:'#fff'}} tag='h4'>PROJECT TIMELINE</CardTitle>
            </CardHeader>
            <CardBody>
              <div style={{height: "400px" }}>
            <Chrono items={items} mode="VERTICAL" />
          </div>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
      <Row>
        <Col md='8'>
        <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Timeline
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Story
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
      <TabPane tabId='1'>
          <UserTimeline />
      </TabPane>
      <TabPane tabId='2'>
      <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          Impact Story
        </CardTitle>
      </CardHeader>
      <CardBody className='align-items-center'>
      <Media styles={{marginRight:10, marginLeft:10}} className='align-items-center mb-3'>
        <img className='mr-1' src={img1} alt='pdf' height='350' width='500' />
        {/* <Media body>invoice.pdf</Media> */}
      </Media>
      <p>
            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
          </p>
          <p>
            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
          </p>
      </CardBody>
    </Card>
     
      </TabPane>
      </TabContent>
      
        </Col>
        <Col md='4' style={{marginTop:55}}>
        <CardChat />
        </Col>
      </Row>
    </div>

    {/* update timeline modal */}
    <div className='vertically-centered-modal'> 
        {/* <Button.Ripple color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
          Launch Modal
        </Button.Ripple> */}
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
          <ModalBody>
            <HorizontalForm/>
          </ModalBody>
          <ModalFooter>
            <Button color='outline-danger' onClick={() => setCenteredModal(!centeredModal)}>
              Cancel
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Users not found</h4>
      <div className='alert-body'>
        Users with id: {id} doesn't exist. Check list of all Users: <Link to='/app/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserView
