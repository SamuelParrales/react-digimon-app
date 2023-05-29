import { useNavigate } from "react-router-dom";

export const BtnBack = () => {

    const navigate =  useNavigate();
    const onClick = (e)=>{
        e.preventDefault();
        navigate(-1);
    }
  return (
    <button 
        
        className="btn-back"
        onClick={onClick}
    >
        <i className="fa-solid fa-chevron-left"></i>
    </button>
  )
}
