import './App.css'

export default function App() {

  return (
    <div className='info-container'>
      <img className='info-image' src="src\Images\profile.jpeg"></img>

      <div className='inner-container'>
        <h1 className='info-name'>Arda Kestane</h1>
        <p className='info-title'>Software Developer</p>
        <p className='info-website'>www.ardakestane.com</p>

        <div className='buttons'>
          <div className='info-email-button' onClick="">
            <img className='image' src="src\Images\mail.png"></img>
            <p className='email-text'>Email</p>
          </div>

          <div className='info-linkedin-button' onClick="">
            <img className='image' src="src\Images\linkedin.png"></img>
            <p className='linkedin-text'>LinkedIn</p>
          </div>

        </div>
      </div>
    </div >

  )
}
