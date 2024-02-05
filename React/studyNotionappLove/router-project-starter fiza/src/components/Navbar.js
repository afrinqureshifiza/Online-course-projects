import toast from 'react-hot-toast'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'

function Navbar(props){
    let isLoggedIn= props.isLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-richblack-100'>

       <Link to='/'>
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img>
       </Link>

       <ul className='flex gap-6 mx-3 items-center '>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Contact</Link></li>
       </ul>

       <div className='flex gap-4 items-center'>
        { !isLoggedIn &&
            <Link to='/login'><button 
            className='bg-richblack-800 px-[12px] py-[8px]  rounded-[8px] border border-richblack-700'>Log In</button></Link>
        }
        { !isLoggedIn &&
            <Link to='/signup'><button
            className='bg-richblack-800 px-[12px] py-[8px]  rounded-[8px] border border-richblack-700'>Sign up</button></Link>
        }
        { isLoggedIn &&
            <Link to='/'><button onClick={()=>{
                setIsLoggedIn(false)
                toast.success('Logged Out')
            }}>Log Out</button></Link>
        }
        { isLoggedIn &&
            <Link to='/dashboard'><button>Dashboard</button></Link>
        }
       </div>

    </div>
  )
}
export default Navbar