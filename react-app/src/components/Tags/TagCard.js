import { useDispatch } from "react-redux";
import { deleteTag } from "../../store/tags";
import { useHistory } from "react-router";
import './TagCard.css'

const TagCard = ({tag, editTag}) => {
    console.log('tag inside of tagCard', tag)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleDeleteTag = (e) => {
        e.preventDefault()

        return dispatch(deleteTag(tag?.id))
    }

    let tagCard;

    if (editTag) {
        tagCard = (
            <div className="tag-card-tag-user" style={{paddingRight: 26}}>{tag?.tag_name}
            <i className="tag-card-delete-button fa-solid fa-trash" onClick={handleDeleteTag}></i></div>
        )
    } else {
        tagCard = (
            <div className='tag-card-tag-nouser' style={{paddingRight: 10}} onClick={() => history.push(`/tags/${tag?.tag_name}`)}>{tag?.tag_name}</div>
        )
    }
    return (
        <div className="tag-card-container">
            {tagCard}
        </div>
        )

    }


    export default TagCard
