import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import MediaDetails from './steps-with-validation/MediaDetails'
import ImpactDetails from './steps-with-validation/ImpactDetails'
import PartnersDetails from './steps-with-validation/PartnersDetails'

const WizardVertical = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'impact-details',
      title: 'Impact Details',
      subtitle: 'Enter Your Impact Details.',
      content: <ImpactDetails stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'media-files',
      title: 'Media Files',
      subtitle: 'Add Media Files',
      content: <MediaDetails stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'partnes',
      title: 'Add Partners',
      subtitle: 'Add Partners If Any',
      content: <PartnersDetails stepper={stepper} type='wizard-vertical' />
    }
    // {
    //   id: 'social-links',
    //   title: 'Social Links',
    //   subtitle: 'Add Social Links',
    //   content: <SocialLinks stepper={stepper} type='wizard-vertical' />
    // }
  ]

  return (
    <div className='vertical-wizard'>
      <Wizard
        type='vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardVertical
