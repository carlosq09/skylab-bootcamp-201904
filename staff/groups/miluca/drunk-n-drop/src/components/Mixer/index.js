import React from 'react'

function Mixer({type}) {
        
   
        if(type === 'min'){
            return <div class="logomin"/>
  
        }else{
            return <div class="logo"/>
        }
    

}

export default Mixer