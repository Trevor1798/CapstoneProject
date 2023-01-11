import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { getAllFaves } from '../../store/favorites'
import { getImage } from '../../store/image'
import ImageCard from '../Image/ImageCard.js'
import { getUser } from '../../store/user'
import {useHistory, useParams} from 'react-router-dom'
import { getComment } from '../../store/comment'


const UserFaves = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const username = useParams()
    
}
