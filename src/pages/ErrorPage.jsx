import React from 'react'
import Helmet from '../component/Helmet'
const ErrorPage = () => {
  return (
    <Helmet title='Page Not Found - Ananas'>
      <div className='text-center flex items-center justify-center flex-col py-28'>
          <img src="https://ananas.vn/wp-content/themes/ananas/assets/images/page_not_found.png" alt="" />
          <a href='/' className=' text-center font-semibold text-xl bg-orangePrimary py-6 text-white px-24 mt-8 cursor-pointer hover:text-white'>
            QUAY LẠI TRANG CHỦ
          </a>
      </div>
    </Helmet>
  )
}

export default ErrorPage