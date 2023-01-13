import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllTags } from '../../store/tags'
import { getImage } from '../../store/image'
import ImageCard from '../Image/ImageCard'
import { getComment } from '../../store/comment'
import { getAllFaves } from '../../store/favorites'
import { getUser } from '../../store/user'
import './TagSearch.css'

const TagSearch = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {tagname} = useParams()

    const comments = useSelector(state => state.comments)
    const faves = useSelector(state => state.favorites)
    const users = useSelector(state => state.users)
    console.log('tagname inside tagseach', tagname)
    const tags = useSelector(state => state.tags)
    const tagsArr = Object.values(tags)

    const images = useSelector(state => state.images)
    const imageArr = Object.values(images)


    const filteredTags = tagsArr.filter(tag => tag?.tag_name === tagname)
    console.log()
    let eventIdArr = []
    for (let i = 0; i < filteredTags.length; i++) {
        if (!eventIdArr.includes(filteredTags[i].image_id)) {
            eventIdArr.push(filteredTags[i].image_id)
        }
    }

    const filteredByTag = imageArr.filter(image => eventIdArr.includes(image?.id))

    const filteredByTitle = imageArr.filter(image => image?.title.toLowerCase().includes(tagname))

    const combinedFiltered = filteredByTag.concat(filteredByTitle)

    let finalFiltered = []

    for (let i = 0; i < combinedFiltered.length; i++){
        if (!finalFiltered.includes(combinedFiltered[i])) {
            finalFiltered.push(combinedFiltered[i])
        }
    }

    let results;

    if (!finalFiltered.length) {
        results = (
            <div className='tagsearch-outer-container'>
                <div className='tagsearch-container'>
                    <div className='tagsearch-inner-container'>
                        <div className='tagsearch-images-container'>
                            <div className='tagsearch-noresults'>{`There are no matches for "${tagname}"`}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        results = (
            <div className='tagsearch-outer-container'>
                <div className='tagsearch-container'>
                    <div className='tagsearch-inner-container'>
                        <div className='tagsearch-images-container'>
                            {finalFiltered?.map((image, i) => {
                                return (
                                    <div key={i}>
                                    <ImageCard image={image} comments={comments} faves={faves} users={users}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        dispatch(getAllTags())
        dispatch(getImage())
        dispatch(getComment())
        dispatch(getAllFaves())
        dispatch(getUser())
    },[dispatch])

        return (
            <>
      <div className="tagspage-tabs-container">
        <div className="tagspage-tabs">
          <div className="tagspage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="tagspage-tab-explore" onClick={() => history.push(`/trending`)}>Trending</div>
          <div className="tagspage-tab-tags" onClick={() => history.push(`/tags`)}>Tags</div>
        </div>
      </div>

      <div className='tagspage-test-container'>
        <div className='tagspage-testing'>
          <div className='tagspage-inner-test'>

            <div className='tagspage-tag' onClick={() => history.push(`/tags/`)}>Tags</div>
            <div className='tagspage-caret-container'>
              <i className="tagspage-caret fa-solid fa-caret-right"></i>
            </div>
            <div className='tagspage-tagname'>{tagname}</div>

          </div>
        </div>
      </div>

      {results}
    </>
  )
}

export default TagSearch;
