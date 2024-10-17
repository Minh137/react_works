import React from 'react'
import { Row, Col, Form} from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Row className='search-bar bg-light p-2 my-2 rounded-4'>
        <Col md={4} className='d-none d-md-block'>
            <select className='form-select border-0 bg-transparent'>
                <option>전체보기</option>
                <option>식료품</option>
                <option>식료품</option>
                <option>초콜릿</option>
            </select>
        </Col>
        <Col xs={11} md={7}>
            <Form id="search-form" className="text-center" action="index.html" method="post">
                <Form.Conntrol placeholder="20,000개 이상의 상품을 검색하세요." />
            </Form>
        </Col>
        <Col xs={1}>
            <FaSearch />
        </Col>
    </Row>
  )
}

export default Search