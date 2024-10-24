import { Flex } from "../../common/components/Flex";
import { Item } from "../sujeong/item";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Page.css";

export function SujeongIntroPage() {
  const [poketmon, setPoketmon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPokemonData = [];
      // let response;
      for (let i = 1; i < 20; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        console.log("response", response);
        allPokemonData.push({ ...response.data });
      }
      console.log("all", allPokemonData);
      setPoketmon(allPokemonData);
      console.log(poketmon);
      // console.log("포켓몬", poketmon[0].name);
    };
    fetchData();
  }, []);

  // async () => {
  //   const data = await Api();
  //   console.log(data);
  // }; 이렇게는 왜 안 되는걸까

  return (
    <Flex.Column>
      <div className="inner">
        <h1>안녕하세요</h1>
        <h1 className="my">제 이름은 강수정입니다</h1>
        <span>제 꿈은 포켓몬 트레이너입니다</span>
        <br />
        <p>이것은 제 포켓몬 도감입니다 구경하십쇼</p>
        <div className="poketmon">
          <h2>포켓몬 도감</h2>
          <div className="poket_inner">
            {poketmon.map((item) => {
              return (
                <Item
                  name={item.name}
                  id={item.id}
                  img={item.sprites.front_default}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Flex.Column>
  );
}
