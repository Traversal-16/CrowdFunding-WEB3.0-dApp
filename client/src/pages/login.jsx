import React from "react";
import CustomButton from "../components/CustomButton";
import { useStateContext } from "../context";

const Login = ()=>
{
    const {address,connect}=useStateContext ();
    return (
        <div className="container w-full flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"  >
          <h4 className="text-center font-epilogue font-bold  text-white">Welcome Back !!<br/>
          Help People By CrowdFunding Or By Donating to their Campaigns</h4>
          <img src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?size=626&ext=jpg&ga=GA1.1.306475072.1688886943&semt=ais" 
          className="opacity-30 rounded-[30px] border-[1px] border-x-white border-yellow-200"></img>
          <div className="mt-[20px]">
          <CustomButton 
           btnType="button"
           title={address ? 'Logged In' : 'Log  In'}
           styles={address ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-gradient-to-r from-violet-500 to-fuchsia-500'}
           handleClick={() => {
             if(address) navigate('create-campaign')
             else 
             {
               if (typeof window.ethereum !== 'undefined')
               {
                 connect ();
               }
               else{
                 <div>Already logged in</div>
               }
             }
           }}
           />
          </div>

      </div>
   
    );
}

export default Login







