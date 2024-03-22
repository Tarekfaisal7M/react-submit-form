import { useState } from "react";



const SateFullForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit2 = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);

    }
    const handleNameSubmit = e => {
        setName(e.target.value);
    }
    
    const handleEmailSubmit = e => {
        setEmail(e.target.value);

    }

    const handlePasswordSubmit = e => {
         setPassword(e.target.value);
    }
    
    



    return (
        <div>
              <form onSubmit={handleSubmit2}> 
                <input 
                onChange={handleNameSubmit}
                type="text" name="name" />
                <br />
                <input 
                onChange={ handleEmailSubmit}
                type="email" name="email" />
                <br />
                <input 
                onChange={handlePasswordSubmit}
                type="password" name="password" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SateFullForm;