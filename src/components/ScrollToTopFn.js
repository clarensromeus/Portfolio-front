import React from 'react'
import ScrollToTop from "react-scroll-to-top"
import "./ScrollToTop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function ArrowUp() {
  return (
    <div className='parent'>
      <FontAwesomeIcon className='icon' icon={faArrowUp} />
    </div>
  )
}

export default function ScrollToTopFn() {
  return (
    <div>
     <ScrollToTop className='scrollToTop' component={<ArrowUp/>} smooth/>
    </div>
  )
}
