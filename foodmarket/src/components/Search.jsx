import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <Row className="search-bar bg-light p-2 my-2 rounded-4">
        <Col md={4} className="d-none d-md-block">
           <select className="form-select border-0 bg-transparent">
              <option>전체보기</option>
              <option>식료품</option>
              <option>드링크</option>
              <option>초콜릿</option>
           </select> 
        </Col>
        <Col xs={11} md={7}>
           <Form id="search-form" className="text-center" action="index.html" method="post">
              <Form.Control placeholder="20,000개 이상의 상품을 검색하세요." />
           </Form>
        </Col>
        <Col xs={1}>
           <FiSearch />
        </Col>
        
        <Col sm={8} lg={4} className="d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
          <div className="support-box text-end d-none d-xl-block">
            <span className="fs-6 text-muted">For Support?</span>
            <h5 className="mb-0">+980-34984089</h5>
          </div>

          <ul className="d-flex justify-content-end list-unstyled m-0">
            <li>
              <a href="#" className="rounded-circle bg-light p-2 mx-1">
                {/* Replace with actual SVG icon */}
                <FiSearch />
              </a>
            </li>
            <li>
              <a href="#" className="rounded-circle bg-light p-2 mx-1">
                {/* Replace with actual SVG icon */}
                <FiSearch />
              </a>
            </li>
            <li className="d-lg-none">
              <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                {/* Replace with actual SVG icon */}
                <FiSearch />
              </a>
            </li>
            <li className="d-lg-none">
              <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                {/* Replace with actual SVG icon */}
                <FiSearch />
              </a>
            </li>
          </ul>

          <div className="cart text-end d-none d-lg-block dropdown">
            <button
              className="border-0 bg-transparent d-flex flex-column gap-2 lh-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
              <span className="cart-total fs-5 fw-bold">$1290.00</span>
            </button>
          </div>
        </Col>
    </Row>
  )
}

export default Search