import React, { useState } from 'react'
import UserSideNav from '../../Components/sideNavBar/UserSideNav';
import { ABOUT } from '../About/UserAbout';
import UserCart from '../UserCart/UserCart';
import { FAQs } from '../UserFAQ/UserFAQ';
import UserProducts from '../UserProducts/UserProducts';
import "./Userhome.css"


// const Userhome = () => {
//   return (
//     <div className='home'>Userhome</div>
//   )
// }

const Userhome = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='admin'>
      <div className='left'>
        <UserSideNav sendIndex={(a) => {

          setIndex(a);
          console.log(a);
        }} />
      </div>


      {/* <div className='ad_right'> */}
      {
        index === 0 ? <UserProducts /> : index === 1 ? <div>1</div> : index === 2 ? <UserCart /> : index === 3 ? <div>3</div> : index === 4 ? <FAQs /> : <ABOUT />
      }
      {/* </div> */}


    </div>
  )
}

export default Userhome