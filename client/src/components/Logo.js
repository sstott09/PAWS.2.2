import React from 'react';
import Logo from './paws-logo.png'; // Tell webpack this JS file uses this image

class Logo extends Component {
    state = {
        isOpen: false
    }

render() {
    return (
        <div>
            <div className="logo">
            <img src={require("../assets/pawprint.png")
                            }
                            width="100%"
                            alt="paws-logo"
                            id="current-image"/>
            </div>
        </div>
    )
}
}

export default Logo;