"use client"

import { Button } from "react-bootstrap";

const HomeContactInput = () => {
    return (
        <>
            <form className="d-flex">
                <input type="email" className="form-control" placeholder="Enter your Email..." />
                <Button style={{backgroundColor : "orange"}} className="p-3 px-4 rounded-0 border-0">Submit</Button>
            </form>
        </>
    );
}
 
export default HomeContactInput;