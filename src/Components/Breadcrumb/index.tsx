
import { Col, Row } from 'antd';

import "../../Styles/Breadcrumb.css"
const Breadcrumb = () => {
    return (
        <>
            <Row className='breadcrumb'>
                <Col md={2} />
                <Col md={20} >
                    <ul>
                        <li>Electronico, Audio y Videos &gt; </li>
                        <li>!Pod &gt; </li>
                        <li>Reproducciones &gt; </li>
                        <li>32 GB  </li>
                    </ul>
                </Col>
                
            </Row>
        </>
    )
}
export default Breadcrumb