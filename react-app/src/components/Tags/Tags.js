import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllTags } from "../../store/tags";
import { getImage } from "../../store/image";
import TagBigCard from "./TagsBig";
import './Trending.css'
const Tags = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const tags = useSelector(state => state.tags)
    const images = useSelector(state => state.images)


    const tagsArr = Object.values(tags)

    let tagNames = []

    for (let i = 0; i < tagsArr.length; i++){
        if (!tagNames.includes(tagsArr[i].tag_name)) {
            tagNames.push(tagsArr[i].tag_name)
        }
    }
    console.log('this is tagname inside of tags', tagNames)
    tagNames.sort()

    useEffect(() => {
        dispatch(getImage())
        dispatch(getAllTags())
    },[dispatch])


    return (

        <>
        <div className="tagspage-tabs-container">
            <div className="tagspage-tabs">
                <div className="tagspage-tab-explore" onClick={() => history.push('/explore')}>Explore</div>
                 {/* <div className="tagspage-tab-explore" onClick={() => history.push('/trending')}>Trending</div> */}
                 <div className="tagspage-tab-tags" onClick={() => history.push('/tags')}>Tags</div>
            </div>
        </div>

        <div className="tagspage-test-container">
            <div className="tagspage-testing">
                <div className="tagspage-inner-header-container">
                    <div className="tagspage-trending">{`All Tags - Now`}</div>
                </div>
            </div>
        </div>


        <div className="tagpage-outer-container">
            <div className="tagspage-container">
                <div className="tagspage-inner-container">
                    <div className="tagspage-images-container">
                        {tagNames?.map((tagname) => {
                            return (
                                <div key={tagname}>
                                    <TagBigCard tagname={tagname} images={images} tags={tags}/>
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Tags
