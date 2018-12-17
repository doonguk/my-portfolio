import React from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import search from 'files/search/search.png';

const cx = classNames.bind(styles);
// <img src={search} alt="search"/>
const Search = ({keyword, onChange, onKeyPress, onSearch, onPush}) => {
    return(
        <div className={cx('search-template')} id="search">
            <div className={cx('search-box')}>
                <div className={cx('title')}>검색어를 입력해 보세요!</div>
                <div className={cx('example')}>
                    <Link to="/tag/React" className={cx('tag')}>#React</Link>
                    <Link to="/tag/NodeJs" className={cx('tag')}>#NodeJs</Link>
                    <Link to="/tag/JavaScript" className={cx('tag')}>#JavaScript</Link>
                </div>
                <div className={cx('input-div')}>
                    <input name="keyword"
                           value={keyword}
                           onChange={onChange}
                           placeholder="#태그를 넣어보세요!"
                           onKeyPress={onKeyPress}
                           />
                    <div className={cx('btn')}><img src={search} alt="search" onClick={()=>onSearch(keyword)}/></div>
                </div>
                <div className={cx('description')} onClick={onPush}>더 자세한 검색은 여기를 클릭!</div>
            </div>
        </div>
    )
}

export default Search;