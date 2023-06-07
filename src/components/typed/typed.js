import React,{ Component } from 'react';

import Typed from 'react-typed';
 
class MyComponent extends Component {
    render() {
        return (
            
                <Typed
                   strings={ ["Designer","Web Developer", "Photographer","Freelancer"]}
                    typeSpeed={ 100}
                    backSpeed={ 60}
                    loop
                />
              
            
        );
    }
}
 


export default MyComponent;