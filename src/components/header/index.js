import React from 'react'
import NavBar from './Navbar'
export default function Header({location}) {
  console.log(location)
  let headerText = 'عن المستشفى'
  switch (location.pathname) {
    case '/medical-prescription':
      headerText = 'الوصفات الطبية'
      break;
    case '/my-wallet':
      headerText = 'محفظتي'
      break
    case '/contact-us':
      headerText = 'تواصل معنا'
    default:
      break;
  }
  return (
    <div>
      <NavBar />
  <div className="d-flex align-items-center justify-content-center header"><h1>{headerText}</h1></div>
    </div>
  )
}
