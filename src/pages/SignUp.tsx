import FormSignUp from '../components/FormSignUp'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[calc(100vh-100px)]">
      <div className="flex flex-col items-center justify-center bg-white w-[489px]  rounded-[8px] py-6">
        <h1 className="inter-semi-bold text-2xl">Sign up</h1>
        <FormSignUp />
        <span className="mt-6 text-[#909090]">
          Have account{' '}
          <Link to="../login" className="text-[#4d5dfb]">
            Log in
          </Link>
        </span>
      </div>
    </div>
  )
}
