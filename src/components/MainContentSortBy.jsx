import { useEffect, useRef, useState } from 'react';
import './MainContentSortBy.scss';

const useMainContentSortBy = () => {
  const [sortedBy, setSortedBy] = useState('most-upvotes');

  return {
    sortedBy: sortedBy,
    sortByRender: (
      <div className="sort">
        <h2>Sort by :</h2>

        <select name="sort-by" onChange={(e) => setSortedBy(e.target.value)}>
          <option className="option" value="most-upvotes">
            Most Upvotes
          </option>
          <option value="least-upvotes">Least Upvotes</option>
          <option value="most-comments">Most Comments</option>
          <option value="least-comments">Least Comments</option>
        </select>
      </div>
    ),
  };
};

export default useMainContentSortBy;
