import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { FILTERS_CONFIG } from "./filtersConfig";
import FilterField from "./FilterField";

import css from "./Filters.module.css";

const buildInitialValues = (filters, config) =>
  config.reduce((acc, item) => {
    acc[item.name] = filters[item.name];
    return acc;
  }, {});

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <div className={css.filter_wrapper}>
      <Formik
        initialValues={buildInitialValues(filters, FILTERS_CONFIG)}
        onSubmit={(values) => dispatch(changeFilter(values))}
      >
        <Form>
          {FILTERS_CONFIG.map((filter) => (
            <FilterField key={filter.name} config={filter} />
          ))}

          <button className={css.search_button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filters;
