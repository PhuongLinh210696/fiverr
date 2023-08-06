import React from 'react'
import FormSignInAdmin from '../../Components/FormSignInAdmin/FormSignInAdmin';

const SignInAdmin = () => {
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: login,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className='min-h-screen flex items-center'>
        <div className='w-1/2'>
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        </div>
        <div className='w-1/2'>
            <FormSignInAdmin/>
        </div>
    </div>
  )
}

export default SignInAdmin