// JS→Reactリファクタリング課題 ver2.0

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

// コンポーネント名を変更しました。
// mapで生成した1枚1枚の固有値をindexで管理していましたが、今回は決め打ちのデータしか返ってこないと担保されているのでindexではなくtitle名で比較することにし、引数を一つ減らしました。
const ImagePanel = ({ img, activeTitle, handleClickActiveTitle }) => {
  return (
    <div
      className={`panel ${activeTitle === img.title ? "active" : ""}`}
      style={{ backgroundImage: `url(${img.src})` }}
      onClick={() => handleClickActiveTitle(img.title)}
    >
      <h3>{img.title}</h3>
    </div>
  );
};

function App() {
  // 上記に伴いindexから変更してtitle名を保持するものに変更しました。
  const [activeTitle, setActiveTitle] = useState("");

  // stateが空か既に保有している値と異なるpropsが返ってきた場合は取得したpropsを格納し、同じpropsが返ってきた場合は空にする記述をして、toggle機能を実装しています。
  const handleClickActiveTitle = (props) => {
    !activeTitle || activeTitle !== props
      ? setActiveTitle(props)
      : setActiveTitle("");
  };

  return (
    <div className="App">
      <div className="container">
        {imgArry.map((img, index) => {
          return (
            <ImagePanel
              key={index}
              img={img}
              activeTitle={activeTitle}
              handleClickActiveTitle={handleClickActiveTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
