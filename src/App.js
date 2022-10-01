import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Intro from './components/Intro';
import Index from "./components/IndexPage";
import List from "./components/List";
import LineUp from "./components/LineUp";
import Station from "./components/Station";
import Data from "./components/Data_fail";

import "./css/common.css";
import "./css/indexPage.css";
import "./css/intro.css";
import "./css/list.css";
import "./css/lineUp.css";
import "./css/station.css";
import "./css/responsive.css";

// https://fresh-mint.tistory.com/entry/datajs%EC%97%90-%EC%9E%88%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-useState%EC%97%90-%EB%8B%B4%EA%B8%B0-featmap
// https://ooeunz.tistory.com/135
function App() {
  const datas =
  [
    [ //fiction 0: kor, 1: abd
      [
        { id: 0, station: "Hongik Univ.", title: "본문", name: "농부", text: "커다란 공간 안에 연신 총성이 울려 퍼졌다. 총구로부터 피어나오는 탁한 연기가 연구소 천장을 거세게 덮쳤다. 흰 가운을 입은 남자는 속수무책으로 쓰러지며 피를 뱉어내었고 폐쇄된 철문을 두드리던 여자는 이내 머리통에 구멍이 뚫린 채 스러지는 가축마냥 무너져 내려갔다. 빨간 사이렌이 앵앵거리며 굉음을 냄에도 불구하고 밖으로 뛰쳐나오는 사람은 없었다. 말 그대로 아비규환이었다. 죽지 않으려 울부짖는 누군가, 배를 찔려 안의 것을 토해내는 누군가, 이미 목숨을 빼앗겨 빠르게 굳어가는 누군가. 그들로 인해 실험실 유리가 거친 선혈로 뒤덮였다.\n그런 유리 위로 이내 작은 손들이 조심스레 놓였다. 밖을 내다보는 아이들의 눈에는 번들거리는 생기가 돌고 있었다. 흰 실험복을 입은 그들은 삼삼오오 모여 아수라가 끝나기만을 얌전히 기다렸다. 두꺼운 유리에서 손도 떼지 못한 채 감시하는 듯한 수십 개의 눈이 그렇게 느리게 굴러갔다.\n마침내 열리지 않을 것만 같던 묵직한 철문이 열리고 무장한 군인들 사이로 줄을 맞추어 걸어가면서도 그들은 꽉 쥔 손을 놓지 않았다. 그때 아이들은 말갛게 웃고 있었다. 긴 기장의 바짓단이 피로 척척하게 젖어가는 와중에도 텅 빈 눈이 그들을 원망하듯 등 뒤로 달라붙을 때에도 마치 영겁 같은 고통에서 구원이라도 받은 것처럼, 아이들은 그렇게 웃고만 있었다.\n커다란 공간 안에 연신 총성이 울려 퍼졌다. 총구로부터 피어나오는 탁한 연기가 연구소 천장을 거세게 덮쳤다. 흰 가운을 입은 남자는 속수무책으로 쓰러지며 피를 뱉어내었고 폐쇄된 철문을 두드리던 여자는 이내 머리통에 구멍이 뚫린 채 스러지는 가축마냥 무너져 내려갔다. 빨간 사이렌이 앵앵거리며 굉음을 냄에도 불구하고 밖으로 뛰쳐나오는 사람은 없었다. 말 그대로 아비규환이었다. 죽지 않으려 울부짖는 누군가, 배를 찔려 안의 것을 토해내는 누군가, 이미 목숨을 빼앗겨 빠르게 굳어가는 누군가. 그들로 인해 실험실 유리가 거친 선혈로 뒤덮였다."},
        { id: 1, station: "Songchu", title: "제목", name: "익명A"},
        { id: 2, station: "City Hall", title: "제목", name: "익명 B"},
        { id: 3, station: "Yeouinaru", title: "제목", name: "나좀나동"},
        { id: 4, station: "Sintan-ri", title: "제목", name: "익명 C"},
        { id: 5, station: "Hyehwa", title: "제목", name: "라무"},
        { id: 6, station: "Konkuk Univ.", title: "제목", name: "익명 D"},
        { id: 7, station: "D.M.C", title: "제목", name: "비로"},
        { id: 8, station: "Sindorim", title: "제목", name: "푸딩"},
        { id: 9, station: "Pungsan", title: "제목", name: "어운사"},
        { id: 10, station: "Seoul", title: "제목", name: "이플"},
        { id: 11, station: "Sinseol-dong", title: "제목", name: "익명 E"},
        { id: 12, station: "Sillim", title: "제목", name: "커쿄키쿄"},
        { id: 13, station: "Sinchon", title: "제목", name: "백수"},
        { id: 14, station: "Busan", title: "제목", name: "일금"},
        { id: 15, station: "Jongno 3-ga", title: "제목", name: "마노"},
      ],
      [
        { id: 0, station: "King's Cross", title: "제목", name: "크랙커"},
        { id: 1, station: "Sapporo", title: "제목", name: "사도"},
        { id: 2, station: "Moscow", title: "제목", name: "WAY"},
        { id: 3, station: "Dublin Heuston", title: "제목", name: "마일드"},
        { id: 4, station: "Shilin", title: "제목", name: "똘치"}
      ]
    ], 
    [ //art 0: kor, 1: abd
      [
        { id: 0, station: "Everland", title: "나의 위치 : 에버랜드역", name: "멍이", art: "멍이_에버랜드역.jpg"},
        { id: 1, station: "Gimpo Airport", title: "제목", name: "커쿄키쿄", art: "sample_01.jpg"}
      ],
      [
        { id: 0, station: "Akihabara", title: "제목", name: "량", art: "sample_01.jpg"},
        { id: 1, station: "Taipei", title: "제목", name: "댕투", art: "sample_01.jpg"}
      ]
    ],
    [ //vdo 0: kor, 1: abd
      [
        { id: 0, station: "Kisaragi", title: "내가 죽으려고 생각한 것은", name: "나나미", vdo: "https://youtube.com/embed/r5qdQl3m5SI"}
      ]
    ]
  ]
  //app으로는 들어가는데 app에서 lineup, station으로 넘겨 줘야 함

  return (
    <>
      <Data App={ App } />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/index" element={<Index />} />
        <Route path="/list" element={<List />} />
        <Route path="/lineup" element={<LineUp datas={datas} />} />
        <Route path="/lineup/:id" element={<Station />} />
      </Routes>
    </>
  );
}

export default App;


// router, useLocation으로 상세 페이지 구현 https://bmy1320.tistory.com/entry/React-Router-useLocation-%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%ED%98%84