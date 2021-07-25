import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
             
            <img className="header_logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nicepng.com%2Fourpic%2Fu2q8a9u2o0o0i1t4_amazon-logo-amazon-logo-white-text%2F&psig=AOvVaw2RmpDGf-veokEZ-sIUFEys&ust=1627233256084000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCvmOia_PECFQAAAAAdAAAAABAD" alt=""/>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                <div className="header_optionBasket">
                    <ShoppingBasketIcon className="header_optionBasket" />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </div>

        </div>
    );
}

export default Header;
