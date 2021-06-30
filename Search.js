import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import "./search.css"
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons=true}) {
    const [{term},dispatch] = useStateValue();
    const [input,setinput]=useState("");
    const history=useHistory()
    const search=(e) =>{
        e.preventDefault();
        console.log("You hit the search button >>>",input)
        dispatch({
            type:actionTypes.Set_Search_Term,
            term:input
        })

        history.push("/search")
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputicon" />
                <input value={input}  onChange={ e => setinput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ?
            (
                <div className="search_buttons">
                <Button type="submit" onClick={search}> Google Search</Button>
                <Button> Hey Akshat Here</Button>
            </div>

            ) : (
                <div className="search_buttons">
                <Button className="search_buttonshidden" type="submit" onClick={search}> Google Search</Button>
                <Button className="search_buttonshidden"> Hey Akshat Here</Button>
            </div>

            )}
            
        </form>
    )
}

export default Search

