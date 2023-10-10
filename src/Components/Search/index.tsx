
import { Col, Row } from 'antd';

import "../../Styles/Search.css"
import ImgLogo from "../../Assets/Logo_ML.png"
import SearchImg from "../../Assets/ic_Search.png"
import { NavLink } from "react-router-dom";
import { Input } from 'antd';
import useSearch from '../../Hooks/useSearch';


const Search = () => {
    const {search, onChangeField, onChangeEnter} = useSearch()
    return (
        <>
            <Row className='styleHeader'>
                <Col md={2} />
                <Col md={20} >
                    <img src={ImgLogo} className='iconLogo' />
                    <div className='styleBoxSearch'>
                        <Input placeholder="Basic usage" className='inputSearch' value={search} onChange={(e) =>  onChangeField(e.target.value)} onPressEnter={onChangeEnter} />
                        <div className='iconSearch'>
                            <NavLink
                                to={"/items?search=" + search}>
                                <img src={SearchImg} className='iconSearchStyle' />
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
      
        </>
    )
}
export default Search