import React, {Component} from 'react';
import _ from 'lodash';

class Pagination extends Component {

    render(){

        let {pages, onSwitchPage, currentPage} = this.props;

        pages = _.range(1,pages+1,1);

        console.log(pages);

        return(<nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.length > 1 && pages.map(page=>(<li key={page} className={currentPage === page ? "page-item active" : "page-item"} onClick={()=>onSwitchPage(page)}><a className="page-link" href="#">{page}</a></li>))}
        </ul>
        </nav>);

    }

}

export default Pagination;