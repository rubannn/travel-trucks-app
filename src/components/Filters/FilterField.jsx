import { Field } from "formik";
import icons from "../../assets/sprite.svg";
import css from "./Filters.module.css";

const FilterField = ({ config }) => {
    if (config.type === "text") {
        return (
            <div className={css.input_wrapper}>
                <label className={css.filter_title}>{config.label}</label>
                <Field
                    name={config.name}
                    type="text"
                    placeholder={config.placeholder}
                    className={css.input_location}
                />
                <svg className={css.icon} width="20" height="20">
                    <use href={`${icons}${config.icon}`} />
                </svg>
            </div>
        );
    }

    if (config.type === "checkbox" || config.type === "radio") {
        return (
            <>
                <h3 className={css.equipment_title}>{config.title}</h3>
                <div className={css.group_wrapper}>
                    {config.options.map(({ key, value, label, svg }) => (
                        <label key={key}>
                            <Field
                                type={config.type}
                                name={config.name}
                                value={value}
                            />
                            <p>
                                <svg width="32" height="32">
                                    <use href={`${icons}#${svg}`} />
                                </svg>
                                <span>{label}</span>
                            </p>
                        </label>
                    ))}
                </div>
            </>
        );
    }

    return null;
};

export default FilterField;
