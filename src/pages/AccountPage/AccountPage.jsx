import React from 'react'
import "./AccountPage.css"

export const AccountPage = () => {
  return (
    <div className='page-main-head'>
        <div className='page-main-acc'>
            <div className='page-heading'>
                <h3>Account Setting</h3>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"35% 65%"}}>
                <div>
                    <img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" alt="" style={{borderRadius:"50%",width:"70px",height:"70px",padding:"1rem"}}/>
                </div>
                <div>
                    <p><b>Marry Doe</b> <br />Marry@Gmail.com</p>
                </div>
            </div>
            <div style={{paddingLeft:"1rem",paddingRight:"0.5rem",borderBottom:"0.1px solid rgb(225, 224, 224)"}}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quaerat nihil ea? Sed odio culpa</p>
            </div>
        </div>
    </div>
  )
}
