import { useHistory } from "react-router";
import './TagsBig.css'

const TagBigCard = ({tagname, images, tags}) => {

    const history = useHistory()
    const tagsArr = Object.values(tags)
    const imagesArr = Object.values(images)
    console.log('these are my tags', tagsArr)

    console.log('this is my tagname',tagsArr)
    const filteredTags = tagsArr.filter(tag => tag?.tag_name === tagname)


    let eventIdArr = []

    for (let i = 0; i < filteredTags.length; i++){
        if (!eventIdArr.includes(filteredTags[i]?.image_id)){
            eventIdArr.push(filteredTags[i]?.image_id)
        }
    }


    const filteredByTag = imagesArr.filter(image => eventIdArr.includes(image?.id))

    const filteredByTitle = imagesArr.filter(image => image?.title.toLowerCase())

    const finalFiltered = filteredByTag.concat(filteredByTitle)

    const randomNum = Math.floor(Math.random() * finalFiltered.length)

    const randomImage = finalFiltered[randomNum]
    console.log('randomimage', randomImage)

    return (
        <div className="tagbigcard-container" onClick={() => history.push(`/tags/${tagname}`)}>
            <img className="tagbigcard-pic" src={randomImage?.image_url} alt=''></img>
            <div className="tagbigcard-text">{tagname}</div>
        </div>
    )
}


export default TagBigCard
