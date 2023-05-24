import React from 'react';

function Footer() {
    return ( 
        <>
            <div className="footer">
                <div className="footer-1">
                    <h4>Developer : <a href='https://github.com/Mash14' target='_blank' title='Github Account'>Mash14</a></h4>
                    <h4>Quizes Api : <a href='https://opentdb.com/api_config.php' title='Trivia API' target='_blank'>Trivia Api</a></h4>
                </div>
                <hr className='hr-footer' />
                <div className="footer-2">
                    <h4>Mash14 &copy; {new Date().getFullYear()} Quiz App. All rights reserved.</h4>
                </div>
            </div>
        </> 
    );
}

export default Footer;