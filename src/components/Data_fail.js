import React, { useState } from 'react';

function Data({ App }) {
  // let [datas, setDatas] = useState("default");

  const datas =
  [
    //fiction 0: kor, 1: abd
    [
      { id: 0, title: "Hongik Univ.",
      text: "커다란 공간 안에 연신 총성이 울려 퍼졌다. 총구로부터 피어나오는 탁한 연기가 연구소 천장을 거세게 덮쳤다. 흰 가운을 입은 남자는 속수무책으로 쓰러지며 피를 뱉어내었고 폐쇄된 철문을 두드리던 여자는 이내 머리통에 구멍이 뚫린 채 스러지는 가축마냥 무너져 내려갔다. 빨간 사이렌이 앵앵거리며 굉음을 냄에도 불구하고 밖으로 뛰쳐나오는 사람은 없었다. 말 그대로 아비규환이었다. 죽지 않으려 울부짖는 누군가, 배를 찔려 안의 것을 토해내는 누군가, 이미 목숨을 빼앗겨 빠르게 굳어가는 누군가. 그들로 인해 실험실 유리가 거친 선혈로 뒤덮였다.\n그런 유리 위로 이내 작은 손들이 조심스레 놓였다. 밖을 내다보는 아이들의 눈에는 번들거리는 생기가 돌고 있었다. 흰 실험복을 입은 그들은 삼삼오오 모여 아수라가 끝나기만을 얌전히 기다렸다. 두꺼운 유리에서 손도 떼지 못한 채 감시하는 듯한 수십 개의 눈이 그렇게 느리게 굴러갔다.\n마침내 열리지 않을 것만 같던 묵직한 철문이 열리고 무장한 군인들 사이로 줄을 맞추어 걸어가면서도 그들은 꽉 쥔 손을 놓지 않았다. 그때 아이들은 말갛게 웃고 있었다. 긴 기장의 바짓단이 피로 척척하게 젖어가는 와중에도 텅 빈 눈이 그들을 원망하듯 등 뒤로 달라붙을 때에도 마치 영겁 같은 고통에서 구원이라도 받은 것처럼, 아이들은 그렇게 웃고만 있었다.\n커다란 공간 안에 연신 총성이 울려 퍼졌다. 총구로부터 피어나오는 탁한 연기가 연구소 천장을 거세게 덮쳤다. 흰 가운을 입은 남자는 속수무책으로 쓰러지며 피를 뱉어내었고 폐쇄된 철문을 두드리던 여자는 이내 머리통에 구멍이 뚫린 채 스러지는 가축마냥 무너져 내려갔다. 빨간 사이렌이 앵앵거리며 굉음을 냄에도 불구하고 밖으로 뛰쳐나오는 사람은 없었다. 말 그대로 아비규환이었다. 죽지 않으려 울부짖는 누군가, 배를 찔려 안의 것을 토해내는 누군가, 이미 목숨을 빼앗겨 빠르게 굳어가는 누군가. 그들로 인해 실험실 유리가 거친 선혈로 뒤덮였다."},
      { id: 1, title: "Songchu"},
      { id: 2, title: "City Hall"},
      { id: 3, title: "Yeouinaru"},
      { id: 4, title: "Sintan-ri"},
      { id: 5, title: "Hyehwa"},
      { id: 6, title: "Konkuk Univ."},
      { id: 7, title: "D.M.C"},
      { id: 8, title: "Sindorim"},
      { id: 9, title: "Pungsan"},
      { id: 10, title: "Seoul"},
      { id: 11, title: "Sinseol-dong"},
      { id: 12, title: "Sillim"},
      { id: 13, title: "Sinchon"},
      { id: 14, title: "Busan"},
      { id: 15, title: "Jongno 3-ga"},
    ],
    [
      { id: 0, title: "King's Cross"},
      { id: 1, title: "Sapporo"},
      { id: 2, title: "Moscow"},
      { id: 3, title: "Dublin Heuston"},
      { id: 4, title: "Shilin"}
    ]
  ]

  App(datas);

  return (
    <></>
  );
}

export default Data;
