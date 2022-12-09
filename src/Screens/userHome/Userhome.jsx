import React from 'react'
import UserSideNav from '../../Components/sideNavBar/UserSideNav';
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
                  index === 0 ? <div>0</div> : index === 1 ? <div>1</div> : <div>2</div>
              }
          {/* </div> */}


      </div>
  )
}

export default Userhome