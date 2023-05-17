import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {register, handleSubmit, errors} = useForm();
  const [userInfo, setUserInfo]=useState();
  const onSubmit=(data)=>{
    setUserInfo(data);
    console.log(data);
  }
  
  
  return (
    <>
       <div className='ui container' >
        <div style={{marginTop:"50px",border:"1px solid black", padding:"20px",backgroundColor:"white",borderRadius:"10px"}}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
<pre>
{JSON.stringify(userInfo, undefined, 2)}
</pre>
       
       <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>UserName</label>
          {/* <input type="text" name="username" placeholder="Username" {...register('username', { required: "Username is required",})}/> */}
          <input type="text" name="username" placeholder="Username" {...register('userName', { required: true})}/>
          {/* {errors.userName && <p>UserName is required.</p>} */}
          
        </div>

          <div className="field">
            <label>Email</label>
            {/* <input type="email" name="email" placeholder="Email" {...register('email', { required: "Email is required"})}/> */}
            <input type="email" name="email" placeholder="Email" {...register('email', { required: true})}/>
            {/* {errors.email && <p>Username is required.</p>} */}
          </div>

          <div className="field">
            <label>Password</label>
            {/* <input type="password" name="password" placeholder="Password"  {...register('password', { required: "Password is required"})}/> */}
            <input type="password" name="password" placeholder="Password"  {...register('password', { required: true})}/>
            {/* {errors.password && <p>Username is required.</p>} */}
          </div>

          <button className="ui fluid button blue" type="submit">Submit</button>
        </form>
        </div>
       
    </div>
    </>
   
  );
}

export default App;
