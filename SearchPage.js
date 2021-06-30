import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import "./searchPage.css"
import Search from './pages/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const[{term},dispatch]=useStateValue();
    const {data} =useGoogleSearch(term)
    

console.log(data)
    return (
        <div className="searchPage">
        <div className="searchPage_header">
            <Link to="/">
                <img  className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                        alt=""/>
            </Link>
            <div className="searchPage_headerbody">
            <Search  /> 
            <div className="searchPage_options">
                <div className="searchPage_optionsleft">
                <div className="searchPage_option">
                    <SearchIcon />
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >All</a>
                </div>

                <div className="searchPage_option">
                    <DescriptionIcon />
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >News</a>
                </div>

                <div className="searchPage_option">
                    <ImageIcon/>
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >Images</a>
                </div>

                <div className="searchPage_option">
                    <LocalOfferIcon />
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >Shopping</a>
                </div>

                <div className="searchPage_option">
                    <RoomIcon />
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >Maps</a>
                </div>

                <div className="searchPage_option">
                    <MoreVertIcon />
                    <a href="https://mail.google.com/mail/u/0/?tab=km#inbox" >more</a>
                </div>
                 </div>
                 
            </div>
            </div>
        
            
        </div>

        {true && (
        <div className="searchPage_result">
                <p className="searchPage_resultcount">
                    About {data?.searchInformation.formattedTotalResults} akshat
                       results in {data?.searchInformation.formattedSearchTime} sec for {term}
                </p>
                    {data?.items.map((item) => (
                        <div className="searchPage_results">
                            <a href={item.link}>
                                    {item.displayLink}
                            </a>
                            <a className="searchPage_resulttitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultsnippet">
                                {item.snippet}

                            </p>
                        </div>
                    ))}

                )}

        </div> )}
        </div>
    )
}

export default SearchPage
