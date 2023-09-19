import "./styles.css";
import JsonData from "./news.json";

export default function Card() {
  function limitDescription(description, maxLength) {
    if (description && description.length > 0) {
      const words = description.split(" ");
      if (words.length > maxLength) {
        return words.slice(0, maxLength).join(" ") + "...";
      }
      return description;
    }
    return "";
  }

  const displayData = JsonData.results.slice(0, 4).map((info) => {
    function imgReplace() {
      if (info.image_url === null) {
        return "https://fastly.picsum.photos/id/439/536/354.jpg?hmac=cr_mJl3_TiOZLEY3Q90ui03r-EKYwrz-Ij5z3WPhSHo";
      } else {
        return info.image_url;
      }
    }

    const limitDesc = limitDescription(info.description, 25);

    //close button
    function onClickClose(event) {
      const element = event.target.parentElement;
      element.remove();
    }

    return (
      <>
        <div className="story" key={info.id}>
          <div className="story__img">
            <img src={imgReplace()} alt="" />
          </div>

          <div className="story__box">
            <h1 className="story__header">
              <a href={info.link}>{info.title}</a>
            </h1>
            <p className="story__desc">{limitDesc}</p>
            <a href={info.link} className="story__link">
              Read More
            </a>
          </div>
          <span className="story__close" onClick={onClickClose}>
            x
          </span>
        </div>
      </>
    );
  });

  return <div className="container">{displayData}</div>;
}
