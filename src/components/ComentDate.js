import CommentWrraper from '../UI/CommentWrraper'

function formatDate(date) {
    return date.toLocaleDateString(); // 2022.-5.20 Tc 11.30.11 ушундай кылып чыгарып берет бизге  toLacaleDateString()
  }



function CommentDate(props) {
   return (
     <CommentWrraper>
    <div className='Comment-date'>
    {formatDate(props.date)}
  </div>
  </CommentWrraper>
   )
}
export default CommentDate