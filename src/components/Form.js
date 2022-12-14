import React, { Component } from 'react'

export class form extends Component {
  render() {
    return (
      <div className='form'>
        <label className='title'>Class Review Form</label>
        <br></br>
        <label className='classname'>1. Enter Class Name:
            <input
               type = "text"
               name = 'class'
            />
        </label>
        <br></br>
        <label className='professorname'> 2. Enter Professor Name:
            <input 
               type = "text"
               name= 'professor'
             />
    
        </label>
        <br />

        <label className='rating'>2. Rate the Professor from 1-5
            <br />
            <input className='rate'
             type= 'checkbox'
             name= 'prating'
            />

            <input 
             type = 'checkbox' />

           <input 
             type = 'checkbox' />
           <input 
             type = 'checkbox' />

             <input 
             type = 'checkbox' />

        
        </label> 
        <br />
        <label> 3. Overall Review for the Professor
           <input 
            type= "text"
           />
          
        </label>
        <br></br>
        <label> 4. Work Load Rating: Rate from 1-5
            <br />
          <input 
            type = "checkbox"/>

           <input 
            type = "checkbox"/>
            <input 
            type = "checkbox"/>
            <input 
            type = "checkbox"/>
            <input 
            type = "checkbox"/>
        </label>
        <br />
        <label> 5. Describe the overall workload 
           <input 
             type= "textfeild"/>
        </label>
        <br />

        <label> 6. Describe the grading system of the Professor
           <input
              type = "textbox"
           />
        </label>

        
      </div>
    )
  }
}

export default form
