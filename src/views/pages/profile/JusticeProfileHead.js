import { useState } from 'react'
import { AlignJustify, Rss, Info, Image, Users, Edit } from 'react-feather'
import { Link } from 'react-router-dom'
import { Card, CardImg, Collapse, Navbar, Row, Nav, NavItem, NavLink, Button, Badge } from 'reactstrap'

const JusticeProfileHead = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Card className='profile-header mb-2'>
      <CardImg src={data.coverImg} alt='User Profile Image' top />
      <div className='position-relative'>
        <div className='profile-img-container d-flex align-items-center'>
          <div className='profile-img'>
            <img className='rounded img-fluid' src={data.avatar} alt='Card image' />
          </div>
          <div className='profile-title ml-3'>
            <h2 className='text-white'>{data.username}</h2>
            <p className='text-white'>{data.designation}</p>
          </div>
        </div>
      </div>
      <div className='profile-header-nav'>
        <Navbar className='justify-content-end justify-content-md-between w-100' expand='md' light>
          <Button color='' className='btn-icon navbar-toggler' onClick={toggle}>
            <AlignJustify size={21} />
          </Button>
          <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
              <Nav className='mb-0' pills>
                <NavItem>
                  <NavLink className='font-weight-bold' active>
                    <span className='d-none d-md-block'>Feed</span>
                    <Rss className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='font-weight-bold'>
                    <Badge color='warning' className='badge-glow'>
                        Account Not Verified
                    </Badge>
                    {/* <Info className='d-block d-md-none' size={14} /> */}
                  </NavLink>
                </NavItem>
               
              </Nav>
              <Row>
              <Button.Ripple tag={Link} to='/pages/user-profile/verify-kyc' className='mr-1' color='outline-info'>
                  <Edit className='d-block d-md-none' size={14} />
                <span className='font-weight-bold d-none d-md-block'>Verify Kyc</span>
              </Button.Ripple>
              <Button tag={Link} to='/pages/user-profile/edit-profile' color='primary'>
                <Edit className='d-block d-md-none' size={14} />
                <span className='font-weight-bold d-none d-md-block'>Edit</span>
              </Button>
              </Row>
             
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  )
}

export default JusticeProfileHead
