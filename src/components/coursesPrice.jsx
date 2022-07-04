import React, { useEffect } from "react";
import s from "./coursesPrice.module.css";

const CoursesPrice = () => {
  // Список курсов

  let currentCourse = [];

  const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
  ];

  // Варианты цен (фильтры), которые ищет пользователь

  const filter = [
    { name: "required Range #1", value: [null, 200] },
    { name: "required Range #2", value: [100, 350] },
    { name: "required Range #3", value: [200, null] },
  ];

  //   let requiredRange1 = [null, 200];
  //   let requiredRange2 = [100, 350];
  //   let requiredRange3 = [200, null];

  const changeOrder = () => {
    courses.find((item) => item.price == filter.value);
  };

  const log = () => {
    console.log(currentCourse);
  };

  useEffect(() => {}, []);

  return (
    <div className={s.container}>
      <button className={s.button} onClick={log}>
        log
      </button>
      <div className={s.content}>
        <div className={s.table}>
          {!!courses &&
            courses.map((el) => (
              <div className={s.tableElement} key={el}>
                <div>{el.name}</div>
                <div>{" " + el.prices[0] + " " + el.prices[1]}</div>
              </div>
            ))}
        </div>
        <div className={s.buttons}>
          {!!filter &&
            filter.map((el) => (
              <button onClick={changeOrder} className={s.button}>
                {el.name} <br /> {el.value[0] + " " + el.value[1]}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPrice;
