import React from 'react'
import preloader from '../../assets/images/loader.svg'

let Preloader = (props) => {
    return (
        <div>
            <img alt="preloader" src={preloader} />
        </div>
    )
}

export default Preloader