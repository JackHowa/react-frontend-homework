import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageContainer extends Component {
  render() {
    const { imageURL, fallbackImage, alt } = this.props;
    return (
      <div className="container-photo">
        <img
          src={imageURL}
          className="photo"
          ref={image => {
            this.image = image;
          }}
          onError={() => {
            this.image.src = fallbackImage;
          }}
          alt={alt}
        />
      </div>
    );
  }
}

ImageContainer.propTypes = {
  imageURL: PropTypes.string.isRequired,
  fallbackImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageContainer;
