import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/slider/slaider3.jpeg'),
        require('../../assets/images/slider/slaider2.jpg'),
        require('../../assets/images/slider/slaider3.jpg'),
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImage, 5000); // Cambia de imagen cada 3 segundos
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showImage(index) {
    return (
      <img
        src={this.state.images[index]}
        alt={`Imagen ${index + 1}`}
        style={{
          opacity: index === this.state.currentIndex ? 1 : 0,
          width:'100%',
          height: '100%',
          position: 'absolute',
          transition: 'opacity 0.5s',
        }}
      />
    );
  }

  nextImage = () => {
    const newIndex = (this.state.currentIndex + 1) % this.state.images.length;
    this.setState({ currentIndex: newIndex });
  }

  render() {
    return (
      <div id="slider-container" style={{ width: '1250px', height: '650px', overflow: 'hidden', position: 'relative' }}>
        {this.state.images.map((image, index) => (
          this.showImage(index)
        ))}
      </div>
    );
  }
}

export default Slider;