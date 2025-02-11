import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <>    
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Thank you for Contact</h1>
							</div>
						</div>
						<div className="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		

		<div className="untree_co-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center pt-5">
          <h2 className="display-3 text-black">Thank you!</h2>
          <p className="lead mb-5">Your Message has been successfuly send.</p>
          <p><Link to="/home" className="btn btn-sm btn-outline-black">Back to Home</Link></p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Message