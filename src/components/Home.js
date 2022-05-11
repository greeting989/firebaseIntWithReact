import React from 'react';
import { Button } from "react-bootstrap";
import {useUserAuth} from "../context/Auth";
function Home() {
    const {user,logOut} = useUserAuth();
   // console.log(user);
    const handleLogout =async ()=>{
        try{
            await logOut();
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  )
}

export default Home