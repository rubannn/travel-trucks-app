import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/truck/operations";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import { selectFilteredTrucks } from "../../redux/filters/selectors";
import { isLoading } from "../../redux/truck/selectors";
import HelmetTitle from "../../components/HelmetTitle";

import css from "./CatalogPage.module.css"

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  const handleFilterChange = () => {
    setVisibleCount(4);
  };

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <HelmetTitle title="Catalog Page" />
      <div className="container">
        <div className={css.catalog_container}>
          <Filters onFilterChange={handleFilterChange} />
          <div className={css.list_column}>
            <TruckList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />

            {!loading && visibleCount < filteredTrucks.length && (
              <button className={css.search_button} type="button" onClick={onClickButton}>
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CatalogPage
