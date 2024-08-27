import { IoStar } from "react-icons/io5";
const Categories = ({ category, items, setItems }) => {
  return (
    <>
      {category.meals.length > 0 && (
        <div className="menus">
          <h2>{category.name}</h2>
          <div className="options">
            {/* {category.meals.title.map((elem) => { */}
            {category.meals.map((elem) => {
              return (
                <div
                  className="meal-card"
                  key={elem.id}
                  onClick={(event) => {
                    event.preventDefault();
                    const itemsCopy = [...items];
                    itemsCopy.push(elem.title);
                    setItems(itemsCopy);
                  }}
                >
                  <div className="meal-infos">
                    <h4>{elem.title && elem.title}</h4>
                    <p className={!elem.description && "hidden"}>
                      {elem.description && elem.description}
                    </p>
                    <div className="price-infos">
                      <span className="price">
                        {elem.price.toLocaleString()} €
                      </span>
                      <span className="populaire">
                        {elem.popular && <IoStar />}
                      </span>
                      <span className="populaire">
                        {elem.popular && "Populaire"}
                      </span>
                    </div>
                  </div>
                  {elem.picture && <img src={elem.picture} alt="meal" />}
                </div>
              );
              // console.log(elem.title);
              // <h4>{elem.title}</h4>;
            })}
            {/* //   <h4>{category.meals.map}</h4>; */}
          </div>
        </div>
      )}
    </>
  );
};
export default Categories;
