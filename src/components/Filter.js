import FilterItem from "./FilterItem";
import { genderData, sizeData, countryData, colorData } from "../filterData";
import { Accordion } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Filter = ({ filters, setFilters, updatePriceRange }) => {
  const handleChangeCheckbox = (e, category, value) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilters((prev) => ({
        ...prev,
        [category]: [...prev[category], value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [category]: prev[category].filter((el) => el !== value),
      }));
    }
  };

  const handleMinInputChange = (e) => {
    setFilters({ ...filters, minInput: e.target.value });
  };

  const handleMaxInputChange = (e) => {
    setFilters({ ...filters, maxInput: e.target.value });
  };

  return (
    <>
      <FilterItem
        title="Gender"
        filterData={genderData}
        category="gender"
        handleChangeCheckbox={handleChangeCheckbox}
        filters={filters}
      />
      <FilterItem
        title="Color"
        filterData={colorData}
        category="color"
        handleChangeCheckbox={handleChangeCheckbox}
        filters={filters}
      />
      <FilterItem
        title="Country"
        filterData={countryData}
        category="country"
        handleChangeCheckbox={handleChangeCheckbox}
        filters={filters}
      />
      <FilterItem
        title="Size"
        filterData={sizeData}
        category="size"
        handleChangeCheckbox={handleChangeCheckbox}
        filters={filters}
      />
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Number</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Min"
                min="1"
                max="1000"
                value={filters.minInput}
                onChange={handleMinInputChange}
              />
              <input
                type="text"
                className="form-control mx-3"
                placeholder="Max"
                min="1"
                max="1000"
                value={filters.maxInput}
                onChange={handleMaxInputChange}
              />
              <button
                className="btn btn-sm btn-primary"
                onClick={updatePriceRange}
              >
                <FaSearch />
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <button
        className="btn btn-primary mt-4 w-100"
        disabled={!Object.values(filters).some((el) => el.length > 0)}
        onClick={() => {
          setFilters({
            gender: [],
            color: [],
            country: [],
            size: [],
            number: [],
            minInput: "",
            maxInput: "",
          });
        }}
      >
        All Clear
      </button>
    </>
  );
};

export default Filter;
