import { Link } from "react-router-dom"

const UpdateSection = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row justify-between mb-[80px]">
        <div className='flex-[0_0_50%]'>
            <p className='font-bold text-2xl uppercase mb-5'>Never miss anything</p>
            <p>Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox</p>
        </div>
        <form className='update__form'>
            <p className='uppercase text-base mb-[25px]'>Get updates by</p>
            <input type='email' placeholder='Email' className='border border-black/50 rounded-lg px-5 py-2.5 block w-[70%] mb-5' required />
            <button className='bg-black text-white mb-[15px] p-2.5 rounded-lg'>Sign Up</button>
            <p>By signing up, you consent to receiving marketing by email and/or SMS and acknowledge you have read our <Link to='/' className='underline'>Privacy Policy</Link>. Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our SMS.</p>
        </form>
    </div>
  )
}

export default UpdateSection