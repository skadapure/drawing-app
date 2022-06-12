import { useEffect,} from "react";
import {Link} from 'react-router-dom';

import { getImage } from "../../store/actions";
import { useDispatch, useStore } from "../../store";
import "./index.css";

const DrawingList = () => {
  const dispatch = useDispatch();

  const { images, userId } = useStore();
  useEffect(() => {
      getImage(dispatch, userId);
  }, [dispatch, userId]);

  return(
    <div className="Drawing-List">
      <div className="Menu-Wrapper"><div className="Menu">
        <label>List of Drawings</label>
      </div></div>
      <>{images.map(image => <div className="Image-Wrapper"><img src={image[1]} alt="some" id={images[0]} className="Thumbnail"/></div>)}</>
      <div className="Draw-Wrapper"><Link to="/draw" className="Draw-Link">
        <button type="button">
          Draw
        </button>
      </Link></div>
    </div>)
}

export default DrawingList;