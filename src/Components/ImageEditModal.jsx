import { useState } from "react"
import propTypes from 'prop-types'

const ImageEditModal = () => {

  const [newImage,setNewImage] = useState(image.src)
  const [newtext,setNewText] = useState(image.text)
  const [newFile,setNewFile] = useState(null)
   

  return (
    <div className="fixed inset-0">

    <div>
      <input
        type="file"
      />
    </div>

    </div>
  )}

export default ImageEditModal