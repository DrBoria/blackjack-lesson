import React, { useState } from "react";
import { getPhotoActionCreator } from "actionCreators/photos";
import Photo from "components/Photo/Photo";
import { connect } from "react-redux";
import styles from "./PhotoPage.module.scss";

function PhotoPage({ photos, isLoading, getPhotoActionCreator }) {
  const [state, setState] = useState('')
  return (
    <div>
      <input type="text" onChange={event => setState(event.target.value)} />

      <button onClick={() => getPhotoActionCreator(state)}>Fetch Photo</button>

      {isLoading && "Loading..."}

      <div className={styles.photoContainer}>
        {photos.map((photo, index) => (
          <Photo key={index} src={photo.src.medium} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.ui.loading,
  photos: state.photo.mediumPhoto,
});

const mapDispatchToProps = (dispatch) => ({
  getPhotoActionCreator: (name) => dispatch(getPhotoActionCreator(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
