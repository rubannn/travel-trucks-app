import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            {description && (
                <meta name="description" content={description} />
            )}
        </Helmet>
    );
};

export default HelmetTitle;
