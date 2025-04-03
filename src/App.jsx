import React from 'react'
import Todo from './components/Todo'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
   <div className='bg-white-500 grid py-4 min-h-screen  '>
   <Todo/>
    {/* Footer */}
    <div className="mt-6 text-center text-gray-700 text-sm flex flex-col items-center">
        <p className="flex items-center gap-2">
          Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by
          <span className="font-semibold text-gray-700"> <i>Pavan</i></span>
        </p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/PYTHON09-ux" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-800 hover:text-gray-600 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/pavan-patane-0261aa354" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700 hover:text-blue-500 transition-all" />
          </a>
        </div>
      </div>
   </div>
  )
}

export default App
