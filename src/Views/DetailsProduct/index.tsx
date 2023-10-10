import Breadcrumb from "../../Components/Breadcrumb"
import { Col, Row } from 'antd';
import "../../Styles/DetailsProductView.css"
import useDetailsProducts from "../../Hooks/useDetailsProduct";
import Loading from "../../Components/Loading";

const DetailsProductView = () => {
    const { dataApi, openLoading } = useDetailsProducts()
    return (
        <>
            <Breadcrumb />
            <Loading open={openLoading} />
            <Row>
                <Col md={2} />
          

                    <Col md={20} >
                        <div className='styleDetailsProductView'>
                        {dataApi.item.picture &&
                            <Row gutter={16}>
                                <Col md={18}>
                                    <img className="imageProductDetails" src={dataApi.item.picture} />
                                </Col>
                                <Col md={6} className="styleDetailsPrice">
                                    <h6>Nuevo - {dataApi.item.sold_quantity} vendidos</h6>
                                    <h1>{dataApi.item.title}</h1>
                                    <h2>$ {dataApi.item.price.amount}</h2>
                                    <button>comprar</button>
                                </Col>
                                <Col md={18} className="descriptionProduct">
                                    <h3>Descripción del producto</h3>
                                    <p>{dataApi.item.description}</p>
                                </Col>
                            </Row>
                              }
                        </div>
                    </Col>
              
            </Row>

        </>
    )
}
export default DetailsProductView