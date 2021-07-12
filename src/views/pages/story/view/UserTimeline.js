// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import ceo from '@src/assets/images/avatars/12-small.png'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'
import img1 from '@src/assets/images/topme/gallery5.jpg'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

// ** Timeline Data
const data = [
  {
    title: '12 Invoices have been paid',
    content: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
    meta: '12 min ago',
    customContent: (
      <Media className='align-items-center'>
        <img className='mr-1' src={img1} alt='pdf' height='400' width='500' />
        {/* <Media body>invoice.pdf</Media> */}
      </Media>
    )
  },
  {
    title: 'Client Meeting',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    color: 'warning',
    customContent: (
      <Media className='align-items-center'>
        <Avatar img={ceo} imgHeight={38} imgWidth={38} />
        <Media className='ml-50' body>
          <h6 className='mb-0'>John Doe (Client)</h6>
          <span>CEO of Infibeam</span>
        </Media>
      </Media>
    )
  },
  {
    title: 'Create a new project for client',
    content: 'Add files to new design folder',
    meta: '2 days ago'
  }
]

const UserTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          User Timeline
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
