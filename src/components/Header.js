import React from 'react'

import Footer from './Footer'
import portfolioPicture from '../assets/images/GradHeadshots-1808.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={portfolioPicture} alt="" /></a>
                    <h1><strong>I am Matt Bodily</strong>, a super simple<br />
                    responsive site template freebie<br />
                    crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
