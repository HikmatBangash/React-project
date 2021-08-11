import React, { useState } from 'react';


const Valform = () =>{

//  const [input1, setinput1] = useState(" ");
//  const [fname, setfname] = useState();
//  const [input2, setinput2] = useState();

 const [FullName, setName] = useState(
      {
        fname: "",
        lname: "",
        email: "",
        ph:    "",
      }
 );

 // setting input
 const InputValidation = (event) =>{
    console.log(event.target.name)

   //   const value = event.target.value;
   //   const name = event.target.name;

     // array / object Destructing
     const {name,value} = event.target;

   // callback function for setting name
   setName( (preValue) => {
      //using spread operator
      return{
        ...preValue,
        [name] : value,
      }

      // without using spread operator 
      /* 
      if(name === "Fname"){
          return{
            fname: value,
            lname: preValue.lname,
            email: preValue.email,
            ph:    preValue.ph,
          };     
       }

      else if(name === "Lname"){
         return{
            fname: preValue.fname,
            lname: value,
            email: preValue.email,
            ph:    preValue.ph,
         }         
      }

      else if(name === "Email"){
         return{
            fname: preValue.fname,
            lname: preValue.lname,
            email: value,
            ph:    preValue.ph,
         }         
      }

      else if(name === "PH"){
         return{
            fname: preValue.fname,
            lname: preValue.lname,
            email: preValue.email,
            ph:    value,
         }         
      }
     */
   }); // callback closing body
 };
 
// submit method definition
const result = (event) => {
   event.preventDefault();
  alert("Form has been submitted!")
  setName( ()=>{
     return{
        fname: "",
        lname: "",
        email: "",
        ph:    "",
     };  
  }); 
}

// we have to return only HTML and HTML elements
   return( 
      <>
      <form onSubmit={result}>
      <div>
      <h1> {FullName.fname} {FullName.lname} </h1>
      <p> {FullName.email} {FullName.ph}</p>
      <br/>
      <input type="text" onChange = {InputValidation} placeholder="please Enter First Name " name="fname" value={FullName.fname} />
      <br/>
      <input type="text" onChange ={InputValidation} placeholder="please Enter second Name" name="lname" value={FullName.lname} />
      <br/>
      <input type="email" onChange = {InputValidation} placeholder="please Enter Email " name="email" value={FullName.email} />
      <br/>
      <input type="number" onChange ={InputValidation} placeholder="please Enter Ph Number" name="ph" value={FullName.ph} />
      
      
       <button type="submit"> Submit </button>

      </div>
      </form>
      </>
   )
}

export default Valform;