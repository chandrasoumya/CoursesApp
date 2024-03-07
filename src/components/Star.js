const Star = ({ stars }) => {
    let Stars = stars / 2;
    let fullStars = [];
    let halfStars = [];
    let emptyStars = [];
    for (let i = 1; i <= Math.floor(Stars); i++) {
      fullStars.push(i);
    }
    for (let i = 1; i <= Math.ceil(Stars) - Math.floor(Stars); i++) {
      halfStars.push(i);
    }
    for (let i = 1; i <= 5-Math.ceil(Stars); i++) {
      emptyStars.push(i);
    }
    return (
      <div className="star">
        {fullStars.map((e, index) => (
          <img key={index} src="./fullstar.png" alt="full star" />
        ))}
        {halfStars.map((e, index) => (
          <img key={index} src="./halfstar.png" alt="half star" />
        ))}
        {emptyStars.map((e, index) => (
          <img key={index} src="./emptystar.png" alt="empty star" />
        ))}
      </div>
    );
  };
  
  export default Star;
  