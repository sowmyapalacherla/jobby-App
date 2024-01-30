import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const accessToken = Cookies.get('jwt_token')
  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="container">
          <h1 className="home-heading">
            Find The Job That <br />
            Fits Your Life
          </h1>
          <p className="description">
            Millions of people are searching for jobs,salary <br />
            information,company reviews.Find the job that fits your <br />
            abilities and potential.
          </p>
          <Link to="/jobs">
            <button type="button" className="find-jobs-button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
