// JS→Reactリファクタリング課題
// 作業時間 30分程度

import { useState } from "react";
import "./App.css";

const imgArry = [
  {
    title: "Image01",
    src: "https://images.unsplash.com/photo-1470214203634-e436a8848e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80",
  },
  {
    title: "Image02",
    src: "https://images.unsplash.com/photo-1661799284030-77b9a67fa451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    title: "Image03",
    src: "https://images.unsplash.com/photo-1661794465928-22538f665d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
  },
  {
    title: "Image04",
    src: "https://images.unsplash.com/photo-1661732017110-52fab3f0ab2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Image05",
    src: "https://images.unsplash.com/photo-1661792808945-847fd0d6b78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

// 画像パネルのコンポーネント
const Item = ({ img, active, addActiveClass, index }) => {
  return (
    <div
      className={`panel ${active === index ? "active" : ""}`}
      style={{ backgroundImage: `url(${img.src})` }}
      onClick={() => addActiveClass(index)}
    >
      <h3>{img.title}</h3>
    </div>
  );
};

function App() {
  // activeクラスを付与するItemのindexを管理
  const [active, setActive] = useState("");

  // 取得したindexに更新
  const addActiveClass = (props) => {
    setActive(props);
  };

  return (
    <div className="App">
      <div className="container">
        {imgArry.map((img, index) => {
          return (
            <Item
              key={index}
              index={index}
              img={img}
              active={active}
              addActiveClass={addActiveClass}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
