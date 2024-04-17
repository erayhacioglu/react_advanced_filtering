import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FilterItem = ({
  title,
  filterData,
  category,
  handleChangeCheckbox,
  filters,
}) => {
  const [search, setSearch] = useState("");

  const searchedData =
    filterData?.length > 0 && search
      ? filterData.filter((el) =>
          el
            .toString()
            .toLocaleLowerCase("TR")
            .includes(search.toString().toLocaleLowerCase("TR"))
        )
      : filterData;

  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={`${title} Search...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {searchedData?.length > 0 &&
            searchedData?.map((item, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item}
                  onChange={(e) => handleChangeCheckbox(e, category, item)}
                  checked={filters[category].includes(item)}
                />
                <label className="form-check-label" htmlFor={item}>
                  {item}
                </label>
              </div>
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FilterItem;
