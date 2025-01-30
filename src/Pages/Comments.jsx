import { Field, Formik,Form } from "formik";
import UserComments from "./UserComments";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../Slices/commentSlice";
import CommentsSlideShow from "./CommentsSlideShow";
import  {v4 as uuid} from 'uuid'

export default function Comments(){
    const dispatch = useDispatch()
    const cmts = useSelector((state)=>state.commentReducer)
    const {userName} = useSelector((state)=>state.chefReducer)
    console.log(cmts.comments)
    return(
        <div className="comments-container">
            <h2>Comments</h2>
            { /* Postive comments placeholder*/}
            <CommentsSlideShow/>
            <Formik initialValues={{comment:''}} onSubmit={(values)=>{

                if(values.comment === ''){
                    return
                }
                const id = uuid()
                dispatch(addComments({...values,id}))
            }}>
                <Form className="comment-form">
                    <label>Add Comment: </label><Field style={{width:'80%'}} name="comment" type="input"></Field>
                    <button type="submit" className="btn fav">Post</button>
                    
                </Form>
            </Formik>
            {cmts.comments.length === 0 ? <div>0 Comments</div> : <UserComments cmts={cmts} name={userName}/>}
        </div>
    )
}