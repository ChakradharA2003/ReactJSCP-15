// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    arrIndex: 0,
  }

  onClickedLeftArrow = () => {
    const {arrIndex} = this.state
    if (arrIndex <= 0) {
      this.state.arrIndex = arrIndex
    } else {
      this.setState(prevState => ({
        arrIndex: prevState.arrIndex - 1,
      }))
    }
  }

  onClickedRightArrow = () => {
    const {arrIndex} = this.state
    if (arrIndex >= 4) {
      this.state.arrIndex = arrIndex
    } else {
      this.setState(prevState => ({
        arrIndex: prevState.arrIndex + 1,
      }))
    }
  }

  render() {
    const {arrIndex} = this.state
    const {reviewsList} = this.props
    const review = reviewsList[arrIndex]
    console.log(review)
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img
          src={review.imgUrl}
          alt={review.username}
          className="profile-image"
        />
        <div className="carousel-container">
          <button
            data-testid="leftArrow"
            type="button"
            className="arrow-btn"
            onClick={this.onClickedLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>

          <p className="username">{review.username}</p>
          <button
            data-testid="rightArrow"
            type="button"
            className="arrow-btn"
            onClick={this.onClickedRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
        <p className="company">{review.companyName}</p>
        <p className="review-para">{review.description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
