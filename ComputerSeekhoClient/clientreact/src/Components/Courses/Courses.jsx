import React from 'react'
import './Courses.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Courses = () => {
  return (
    <div className='courses'>
          <div className='course'>
              <img src={program_1} alt='' />
              <div className="caption">
                  <img src={program_icon_1} alt='' />
                  <p>PG DAC</p>
              </div>
          </div>
          <div className='course'>
              <img src={program_2} alt='' />
              <div className="caption">
                  <img src={program_icon_2} alt='' />
                  <p>PG DBDA</p>
              </div>
          </div>
          <div className='course'>
              <img src={program_3} alt='' />
              <div className='caption'>
                  <img src={program_icon_3} alt='' />
                  <p>PRE-CAT</p>
              </div>
          </div>
    </div>
  )
}

export default Courses
