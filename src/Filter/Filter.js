import React from 'react';

class SelectFilter extends React.Component {

    handleSelectType = (e) => {
        this.props.type(e.target.value)
    }

    handleSelectFilter = (e) => {
        this.props.filter(e.target.value)
    }
    
    render() {
        return (
            <div className="filter">
                <label htmlFor="print">Print Type</label>
                :<select
                onChange={this.handleSelectType} 
                id="print" 
                name="print"
                >
                <option value="all">All</option>  
                <option value="books">Books</option>  
                <option value="magazines">Magazines</option>   
                </select>

                <label htmlFor="book">Book Type</label>
                :<select 
                onChange={this.handleSelectFilter}
                id="book" 
                name="book"
                >
                <option value="partial">No Filter</option>  
                <option value="full">Full</option>
                <option value="free-ebooks">Free E-Books</option>
                <option value="paid-ebooks">Paid E-Books</option>
                <option value="e-books">All E-Books</option>  
                </select>
            </div>
        )
    }
}

export default SelectFilter;