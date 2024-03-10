import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"; 

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]); 
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value); 
    }

    function search(event) {
        event.preventDefault(); 
  

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key={key}`; 
    
    axios.get(apiUrl).then(handleResponse); 


    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    ); 

}