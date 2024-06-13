import React from "react";
import style from "./More_Btn.module.css";
export default function More_Btn() {
  return (
    <>
      <div className={style.container}>
        <input id="burger-btn" className={style.burguer_btn} type="checkbox" />
        <label className={style.burger_label} htmlFor="burger-btn"></label>
      </div>
    </>
  );
}
