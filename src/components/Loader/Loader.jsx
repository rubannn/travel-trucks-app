import { ProgressBar } from 'react-loader-spinner'
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.loader}>
      <ProgressBar
        visible={true}
        ariaLabel="progress-bar-loading"
        width="100"
        color="rgb(228, 72, 72)"
        barColor="rgb(228, 72, 72)"
      />
    </div>
  )
}

export default Loader
