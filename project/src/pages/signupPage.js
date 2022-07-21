
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import SignupForm from '../components/SignupForm';


const SignupPage = () => {
  return (
    <div className='main-container'>
      <div>
        <Navbar />
        <SignupForm />
        <Footer />

      </div>
    </div>
  )
}


export default SignupPage;