import React from 'react'
import { FaAngleRight, FaInstagramSquare, FaTwitter, FaFacebookSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
// import './footerstyle.scss'



function Footer() {
   return (
      <div>
         <footer>
            <div className='footer-main'>
               <div className='footer-div'>
                  <h3>Sanjivan</h3>
                  <p>+91 2356897485</p>
                  <p>www.uidesign.in</p>
                  <p>Pune | Singapore | chennai </p>
                  <p>  <FaTwitter className='icon-fa' />
                     <FaFacebookSquare className='icon-fa' />
                     <FaInstagramSquare className='icon-fa' />
                     <FaLinkedin className='icon-fa' />
                  </p>
               </div>
               <div className='footer-div'>
                  <h3>For Patients</h3>
                  <p> <FaAngleRight className='icon' /> About Us
                  </p>
                  <p> <FaAngleRight className='icon' /> Curriculum</p>
                  <p> <FaAngleRight className='icon' /> Student Gallery</p>
                  <p><FaAngleRight className='icon' /> Students Projects</p>
                  <p> <FaAngleRight className='icon' /> Blog</p>
               </div>
               <div className='footer-div'>
                  <h3>Our associates</h3>
                  <p> <FaAngleRight className='icon' /> Council</p>
                  <p> <FaAngleRight className='icon' /> Internmeets</p>
                  <p> <FaAngleRight className='icon' /> Shikshameets</p>

               </div>
               <div className='footer-div'>
                  <h3>NewsLetter</h3>
                  <p>Signup and receive the extra tips</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora. Ipsam, consectetur? Accusantium debitis cupiditate, voluptates ex id eveniet ipsam, consequuntur reprehenderit voluptatem a perferendis.
                  </p>
                  {/* <form action="">
                     <label htmlFor="">Write your E-mail*</label>
                     <div className='container-form'>
                        <div>
                           <FaEnvelope className='envlop' />
                        </div>

                        <input type="email" placeholder='Enter your E-mail' required /> <br />
                     </div>

                     <button className='subscribe'> <strong> Subscribe</strong> </button>
                  </form> */}

               </div>
            </div>

            <div className="footer-sub">
               <p>2022 all rights are reserved @sanjivan</p>
            </div>

            {/* <div className="chatmain">
               <BsFillChatLeftTextFill className='chat' />
               <div className='span'>
               <span>
                  Chat with us 
               </span>
               <img src="img/hand.png" alt="" />

               </div>
             
            </div> */}
         </footer>
      </div>

   )
}

export default Footer