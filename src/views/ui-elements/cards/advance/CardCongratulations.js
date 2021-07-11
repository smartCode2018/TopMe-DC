import { Award } from 'react-feather'
import Avatar from '@components/avatar'
import { Card, CardBody, CardText, Button } from 'reactstrap'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'
import { Link } from 'react-router-dom'

const CardCongratulations = () => {
  return ( 
    <Card className='card-congratulations' style={{backgroundColor:'red'}}>
      <CardBody style={{backgroundColor:'#009688', borderRadius:5}} className='text-center'>
        {/* <img className='congratulations-img-left' src={decorationLeft} alt='decor-left' />
        <img className='congratulations-img-right' src={decorationRight} alt='decor-right' /> */}
        {/* <Avatar icon={<Award size={28} />} className='shadow' color='primary' size='xl' /> */}
        <div className='text-center'>
          <h3 className='mb-1 text-white'>Welcom Justice</h3>
          <CardText className='m-auto w-75 mb-3'>
            Do you have a story to tell, Well lets get started..
          </CardText>
          <Button.Ripple style={{marginTop:5}} tag={Link} to='/pages/user-profile/create-an-impact' color='outline-info'>
            Create An Impact</Button.Ripple>
        </div> 
      </CardBody>
    </Card>
  )
}

export default CardCongratulations
