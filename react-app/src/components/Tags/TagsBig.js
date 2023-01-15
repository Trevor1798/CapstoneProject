import { useHistory } from "react-router";
import './TagsBig.css'

const TagBigCard = ({tagname, images, tags}) => {

    const history = useHistory()
    const tagsArr = Object.values(tags)
    const imagesArr = Object.values(images)
    console.log('these are my tags', tagsArr)

    console.log('this is my tagname',tagsArr)

    // Filters all tags that match the tagname
    const filteredTags = tagsArr.filter(tag => tag?.tag_name == tagname)


    // Loop through filtered tags and push all the imageIds of those tags into an array
    let eventIdArr = []

    for (let i = 0; i < filteredTags.length; i++){
        if (!eventIdArr.includes(filteredTags[i]?.image_id)){
            eventIdArr.push(filteredTags[i]?.image_id)
        }
    }


    // Filters all the images that matches the imageIds in the eventIdArr (All the images that have the tagname in url)
    const filteredByTag = imagesArr.filter(image => eventIdArr.includes(image?.id))
    // Filters all the images whose title matches the tagname in url
    const filteredByTitle = imagesArr.filter(image => image?.title.toLowerCase().includes(tagname?.toLowerCase()))

    // Combining the two arrays of images (Tagged and Title) into a single array
    const finalFiltered = filteredByTag.concat(filteredByTitle)

    const randomNum = Math.floor(Math.random() * finalFiltered.length)

    // Picks a random image from the finalFiltered array
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
