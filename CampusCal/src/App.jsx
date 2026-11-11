import { useState } from "react";
import "./App.css"

function App() {
    const [ currentPage, setPage ] = useState('home');
    
    function Home() {
        return(
            <> 
                Hello and Welcome... go login or something
                <br/>
                <button onClick={() => setPage('login')}>Log in</button>
            </>
        );
    }
    
    function Login() {
        return(
            <>
                <p>this is login</p>
                <p>welcome to login</p>
                <button onClick={() => setPage('home')}>Home</button>
            </>
        );
    }
    
    return(
        <div className="App">
            {currentPage == 'home' && <Home />}
            {currentPage == 'login' && <Login />}        
        </div>
    );
}


export default App;