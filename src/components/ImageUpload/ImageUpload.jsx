import React from 'react'
import { useRef,useState } from 'react'
import FacePlaceholder from '../../assets/faceplaceholder.jpg'
import Button from '../shared/Button/Button';

export default function ImageUpload(props) {

    const [photo, setPhoto] = useState(null)
    const inputFileRef = useRef(null)
    const selectedImage = photo ?  URL.createObjectURL(photo) : FacePlaceholder


    const imageUpload = e => {
        setPhoto(e.target.files[0])
        props.setImage(e.target.files[0])
    };
    return (
        <React.Fragment>
            <input
                    type="file"
                    id="imageFile" 
                    name='imageFile' 
                    ref={inputFileRef}
                    onChange={imageUpload}
                    className={"input-img"}
                    />
                    <img src={ selectedImage } alt="face"  />
                    <div className={"image-upload-right"}>
                        <Button 
                        
                        onButtonClick={()=>inputFileRef.current.click()}
                        name={"Select image"}
                        className={"btn-img-upload"}/>

                        <p className={"remove-img"} onClick={()=>props.removePhoto()}>Remove image</p>
                    </div>
        </React.Fragment>
    )
}
