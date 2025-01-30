import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { deleteComments } from '../Slices/commentSlice';
import { useDispatch } from 'react-redux';

export default function UserComments({cmts,name}){
    console.log(cmts)
    const dispatch = useDispatch()
    return(
        <div >
            <p>{name+ ' s ' + 'Comments'}</p>
           {cmts.comments.map((item)=>
             <div key={item.id} className='comments'>
           <h3>{item.comment}</h3>
                <IconButton onClick={()=>dispatch(deleteComments({id:item.id}))}>
                    <DeleteIcon/>
                </IconButton>
            </div>
           )}
          

        </div>
    )
}