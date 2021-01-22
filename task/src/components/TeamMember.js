import React from 'react'
import Team from './Team';


function  TeamMember(props) {
   return(
    <div className="col-md-4 col-sm-6 ">
               <div className="card">
      <div className="card-header">
             <img style={{maxWidth:'100%'}} src ={props.info.Img}/>
            </div>
             <div className="card-body">
               <h2>{props.info.Name}</h2>
               <h5>{props.info.Position}</h5>
               <p>{props.info.Description}</p>
               <h5>{props.info.Email}</h5>
               <h6>{props.info.Phone}</h6>
               <div>
               <a href={props.info.facebook}   target="blank" >    facebook     <i class="fab fa-facebook-f"></i></a>
               <a href={props.info.instagram}  target="blank" >    instagram    <i class="fab fa-instagram"></i></a>
               <a href={props.info.twitter}    target="blank" >    twitter      <i class="fab fa-twitter"></i></a>
              </div>
         </div>


       </div>
    </div>

   )
}
export default  TeamMember;

















{/* <a href={props.info.Facebook} target="blank" ><i className="fab fa-facebook-f"></i></a>
         <a href={props.info.Instagram}  target="blank" ><i className="fab fa-instagram"></i></a>
         <a href={props.info.Twitter} target="blank" ><i className="fab fa-twitter"></i></a>
         </div> */}