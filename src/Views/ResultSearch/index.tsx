import { Col, Row } from 'antd';
import "../../Styles/ResultSearchView.css"
import ImgCart from "../../Assets/ic_shipping.png"
import Breadcrumb from '../../Components/Breadcrumb';
import { NavLink } from "react-router-dom";
import useResultSearch from '../../Hooks/useResultSearch';
import { Iitems } from '../../Interface/ResultSearch.interface';
import Loading from '../../Components/Loading';

const ResultSearchView = () => {
    const {dataApi, openLoading} = useResultSearch()
    return (
        <>
            <Breadcrumb />
            <Loading open={openLoading}/>
            <Row>
                <Col md={2} />

                <Col md={20} >
                    <div className='styleResultSearchView '>
                        {dataApi?.items?.map((item: Iitems, key: number) =>{
                            return (
                                <NavLink
                                to={"/items/"+item.id} key={key}>
                                <Row className='paddingProduct'>
                                    <Col md={5}>
                                        <div className='imagenBackground' style={{ backgroundImage: `url("${item.picture}")` }}></div>
                                    </Col>
                                    <Col md={14} className='styleContentProduct'>
                                        <div className='stylePrice'>
                                            <h2>$ {item.price.amount}</h2>
                                            <img src={ImgCart} className='iconCart' />
                                        </div>
                                        <p>{item.title}</p>
                                    </Col>
                                    <Col md={5}>
                                        <h6>Mendoza</h6>
                                    </Col>
                                    <Col md={24}>
                                        <hr className='styleHr' />
                                    </Col>
    
                                </Row>
                            </NavLink>
                            )
                        })}
                    


                    </div>

                </Col>
            </Row>
        </>
    )
}
export default ResultSearchView