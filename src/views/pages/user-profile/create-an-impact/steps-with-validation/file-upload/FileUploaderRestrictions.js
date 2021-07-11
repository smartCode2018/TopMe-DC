import { useState } from 'react'
import Uppy from '@uppy/core'
import { DragDrop } from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const FileUploaderRestrictions = () => {
  const [previewArr, setPreviewArr] = useState([])

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true,
    restrictions: { maxNumberOfFiles: 2, allowedFileTypes: ['image/*'] }
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }

  return (
    <Card>
      <CardHeader >
        <CardTitle tag='h4'> Upload Documents</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Videos <code>Not Accepted</code> Accepted file types, (pdf,images,docs)
        </CardText>
        <DragDrop uppy={uppy} />
        {renderPreview()}
      </CardBody>
    </Card>
  )
}

export default FileUploaderRestrictions
