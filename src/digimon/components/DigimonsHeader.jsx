import PropTypes from 'prop-types';

export const DigimonsHeader = ({query,totalElements}) => {
   
    return (
        <header className="header-digimons container">
            {
                (query)
                ?<h1 className="header-digimons__heading">search results for: <span>{query}</span></h1>
                :<h1 className="header-digimons__heading">All results</h1>
            }
            
            {
                (totalElements>0)
                ?<p className="header-digimons__total">{totalElements} results</p>
                :<p className="header-digimons__total"> without results</p>
            }
            
        </header>
    )
}

DigimonsHeader.propTypes ={
    query: PropTypes.string,
    totalElements: PropTypes.number,
}
