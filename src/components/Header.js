import React from 'react'

import Footer from './Footer'
import portfolioPicture from '../assets/images/GradHeadshots-1808.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={portfolioPicture} alt="" /></a>
                    <h1><strong>Hi, I'm Matt Bodily</strong>. I'm a web developer<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
