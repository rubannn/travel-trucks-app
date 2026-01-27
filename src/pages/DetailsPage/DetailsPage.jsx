import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTruckDetails } from "../../redux/truck/operations";
import DetailedInfo from "../../components/DetailedInfo/DetailedInfo";
import { Toaster } from "react-hot-toast";
import HelmetTitle from "../../components/HelmetTitle";

import css from "./DetailsPage.module.css";

const DetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchTruckDetails(id));
    }, [dispatch, id]);

    return (
        <>
            <HelmetTitle title="Details Page" />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="container">
                <div className={css.wrapper} >
                    <div className={css.detailed_container} >
                        <DetailedInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsPage
