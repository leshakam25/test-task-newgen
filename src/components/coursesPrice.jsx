import React, { useState } from "react";
import s from "./coursesPrice.module.css";

const CoursesPrice = () => {
  // Список курсов
  const [currentFilter, setCurrentFilter] = useState([]);

  const courses = [
    { name: "Courses in England", prices: [null, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
  ];

  // Варианты цен (фильтры), которые ищет пользователь

  let requiredRange1 = [0, 200];
  let requiredRange2 = [100, 350];
  let requiredRange3 = [200, 0];

  const allList = () => {
    setCurrentFilter(courses);
  };
  const filter1 = () => {
    const filterResult = courses.filter(
      (element) =>
        element.prices[0] >= requiredRange1[0] &&
        element.prices[0] <= requiredRange1[1]
    );
    setCurrentFilter(filterResult);
  };
  const filter2 = () => {
    const filterResult = courses.filter(
      (element) => element.prices[0] <= requiredRange2[1]
    );
    setCurrentFilter(filterResult);
  };
  const filter3 = () => {
    const filterResult = courses.filter(
      (element) =>
        element.prices[1] >= requiredRange3[0] ||
        element.prices[0] >= requiredRange3[0]
    );
    setCurrentFilter(filterResult);
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.table}>
          {currentFilter &&
            currentFilter.map((el) => (
              <div className={s.tableElement} key={el}>
                <div>{el.name}</div>
                <div>{" " + el.prices[0] + " " + el.prices[1]}</div>
              </div>
            ))}
        </div>
        <div className={s.buttons}>
          <button onClick={allList}>показать весь список </button>
          <button onClick={filter1}>
            requiredRange1 <br /> 0 - 200
          </button>
          <button onClick={filter2}>
            requiredRange2 <br /> 100 - 350
          </button>
          <button onClick={filter3}>
            requiredRange3 <br /> 200+
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPrice;
