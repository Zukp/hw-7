import ComentDate from "./ComentDate";
import UserInfo from "./UserInfo";
import CommentWrraper from "../UI/CommentWrraper";

function Comment(props) {
  return (
    <div className="Comment">
    <div className='UserInfo'>
   
      
     <UserInfo author={props.author} />
     <CommentWrraper>
       <div className='Comment-text'>
         {props.text}
       </div>
      </CommentWrraper>

      <ComentDate  date={props.date} />
    </div>
  </div>
  )
}
export default Comment