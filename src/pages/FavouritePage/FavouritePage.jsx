import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { selectTrucks } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";
import css from "./FavouritePage.module.css"
import HelmetTitle from "../../components/HelmetTitle";

const FavouritePage = () => {
    const favourites = useSelector(selectFavourites);
    const allTrucks = useSelector(selectTrucks);
    const favouriteTrucks = allTrucks.filter(truck => favourites.includes(truck.id));

    return (
        <>
            <HelmetTitle title="Favourites" description="Favourite Trucks" />
            <div className={css.favourite_wrapper}>
                <div className={css.favourite_list}><TruckList filteredTrucks={favouriteTrucks} /></div>
            </div>
        </>
    )
}

export default FavouritePage
