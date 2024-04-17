import { Container, Row, Col, Alert } from "react-bootstrap";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import users from "./data.json";
import { useState } from "react";

const App = () => {
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    country: [],
    size: [],
    number: [],
    minInput: "",
    maxInput: "",
  });

  console.log(filters.minInput);
  console.log(filters.maxInput);

  const [search, setSearch] = useState("");

  const applyFilters = () => {
    return users?.filter((user) => {
      if (
        filters?.gender?.length > 0 &&
        !filters?.gender?.includes(user?.gender)
      ) {
        return false;
      }

      if (
        filters?.color?.length > 0 &&
        !filters?.color?.includes(user?.color)
      ) {
        return false;
      }

      if (
        filters?.country?.length > 0 &&
        !filters?.country?.includes(user?.country)
      ) {
        return false;
      }

      if (filters?.size?.length > 0 && !filters?.size?.includes(user?.size)) {
        return false;
      }

      if (filters.number.length > 0 && !filters.number.includes(user?.number)) {
        return false;
      }

      return true;
    });
  };

  const filteredData = search
    ? applyFilters().filter((item) =>
        item.fullName
          .toString()
          .toLocaleLowerCase()
          .includes(search.toString().toLocaleLowerCase())
      )
    : applyFilters();

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 15;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / 15);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 15) % filteredData.length;
    setItemOffset(newOffset);
  };

  const updatePriceRange = () => {
    const min = parseInt(filters.minInput ? filters.minInput : "1");
    const max = parseInt(filters.maxInput ? filters.maxInput : "1000");
    const priceRange = Array.from(
      { length: max - min + 1 },
      (_, index) => min + index
    );
    setFilters({ ...filters, number: priceRange });
  };

  return (
    <>
      <Header />
      <Container className="py-5">
        <Search search={search} setSearch={setSearch} />
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Filter
              filters={filters}
              setFilters={setFilters}
              updatePriceRange={updatePriceRange}
            />
          </Col>
          <Col md={8}>
            <h6>
              {filteredData?.length === 0
                ? ""
                : filteredData?.length + " people were found."}
            </h6>
            <Row className="mb-5">
              {currentItems?.length > 0 ? (
                currentItems?.map((user) => (
                  <Col md={4} lg={3} sm={6} key={user?.id} className="mb-4">
                    <Card user={user} />
                  </Col>
                ))
              ) : (
                <Alert variant="primary">No User.</Alert>
              )}
            </Row>
            <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
