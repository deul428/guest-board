import React from 'react';
import { Routes, Route } from "react-router-dom";

import Intro from './components/Intro';
import Index from "./components/IndexPage";
import List from "./components/List";
import LineUp from "./components/LineUp";
import Station from "./components/Station";

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
        { id: 0, station: "Hongik Univ.", title: "그 날 입은 옷", name: "이슬아", 
        text: "\n&nbsp;어느 날 나는 ‘그날 입은 옷’이라는 글감을 칠판에 적었다. 내가 혹은 누군가가 어느 날 입고 있던 옷을 기억하며 글을 써보자는 제안이었다.\n&nbsp;\n&nbsp;이따금씩 우리는 무엇을 입었는지 결코 잊을 수 없는 날을 겪는다. 그 하루는 왜 선명하게 남는가. 누구와 무엇을 경험했기에 그날의 옷차림까지 외우고 있는가. 이 주제로 모은 수십 편의 글 중에서 너무 서투른 옷차림이라 유독 기억에 남은 이야기가 하나 있다. 스물다섯 살의 도혜의 이야기다.\n&nbsp;\n&nbsp;아직 한 번도 알바를 해본 적 없는 아이가 있었다. 열아홉 살의 도혜였다. 도혜는 대부분의 고등학생들처럼 부모님께 용돈을 받으며 학교와 학원을 다녔다. 하지만 그의 친구 윤이는 달랐다. 고등학생 신분으로도 이미 여러 알바를 해본 아이였다. 그들의 동네가 관광지로 뜨기 시작하여 곳곳에 알바 자리가 생겨나던 2014년 무렵이었다. 방과 후에 윤이는 다양한 식당에서 서빙 일을 했다. 자신의 용돈을 직접 벌고 전기료와 난방비도 직접 내야 하는 사정이 윤이에겐 있었다. 도혜의 반에서 그런 친구는 윤이뿐이었다. 쉬는 날이면 윤이는 자신의 가난한 집에 친구들을 초대하여 소박한 파티를 하곤 했다. 도혜는 자신이 모르는 슬픔과 낭만을 아는 듯한 윤이의 모습을 남몰래 동경했다. 당시 윤이는 갈빗집 알바와 중국집 알바를 병행했는데 하루는 갈빗집 알바가 길어지는 바람에 중국집 알바 대타가 필요해졌다. 급하게 대타를 찾느라 난처해진 윤이에게 도혜는 용기를 내어 자신이 대신 출근하겠다고 자처했다.\n&nbsp;\n&nbsp;하지만 정말 그래도 되는 걸까? 윤이보다 어리숙한 자기 모습을 생각하다가 이내 자신이 없어지고 말았다. 도혜는 자신에게 부모가 있다는 것과 그들로부터 별 어려움 없이 용돈을 받는다는 사실이 부끄러워졌다. 그런 게 부끄러운 적은 난생처음이었다. 내게 없는 것 말고 내게 있는 것이 부끄러운 경험 말이다. 염치 때문에 차마 입 밖에 낼 수 없는 부끄러움이었다. 도혜는 가장 아끼는 보라색 맨투맨 티를 입고 윤이가 일하는 중국집 문을 열어젖혔다. 말끔하고 호감 가는 일꾼으로 보이기 위해 신경 써서 골라 입은 옷이었다. 그걸 입고 몇 시간을 일했다. 퇴근할 무렵엔 옷소매에 짜장면 소스와 짬뽕 국물이 잔뜩 튀어 있었다.\n&nbsp;\n&nbsp;그러나 사랑하는 친구의 대타로 뛰는 첫 알바 날에 가장 아끼는 티셔츠를 골라 입는 도혜의 마음을 우리는 그려볼 수 있다. 윤이 덕분에 도혜는 처음으로 자신의 ‘있음’이 부끄러워졌다. 결여된 것들을 통해 윤이가 얼마나 많은 것을 일찌감치 배웠는지 보았기 때문이다. 신형철 평론가의 책 <정확한 사랑의 실험>에 적힌 문장에 따르면 욕망의 세계에서는 우리가 무엇을 갖고 있는지가 중요하지만 사랑의 세계에서는 우리가 무엇을 갖고 있지 않은지가 중요해진다. 도혜가 윤이를 좋아하다가 자신이 무엇에 서툰지 알아가게 되는 과정처럼 말이다. 어떤 사랑은 나를 더 사랑하게 만들기보다 내 안의 결여를 인지하도록 이끈다.\n&nbsp;\n&nbsp;열아홉 살의 도혜는 스스로가 미덥지 않아도 최선을 다해 윤이의 일터에서 일한다. 이렇게 부족한 내가 너처럼 빛나는 사람의 자리를 반이라도 메꿀 수 있다면 기꺼이 시간과 몸과 마음을 쓰겠다는 응답과도 같다. 스물다섯 살 도혜의 글은 이렇게 끝난다.\n&nbsp;\n&nbsp;“새로운 일이 시작될 때마다 나는 자연스레 윤이를 떠올린다. 윤이야, 너는 다 알고 있었니. 무엇을 더 알고 있니. 이다음은 무엇이니. 이젠 보이지 않는 윤이의 뒷모습을 나는 아직도 바쁘게 쫓아가고 있는지 모른다.”\n&nbsp;\n&nbsp;내가 나여서 그 자체로 너무 충분하고 행복하기만 한 사람은 타인의 사랑에 굳이 응답하지 않아도 평안할 것이다. 사랑은 상대에게 없는 것과 나에게 없는 것이 무엇인지 알아차리면서 시작되기도 하니까. 가장 아끼는 맨투맨 티를 입고 중국집 문을 열어젖히며 윤이에게 온몸으로 응답하는 도혜의 모습을 잊지 못할 것 같다. 사랑과 우정이 해내는 일들 중 하나이기 때문이다.\n&nbsp;\n&nbsp;\n&nbsp;\n&nbsp;2020.02.24.경향신문\n&nbsp;\n&nbsp;글 : 이슬아"
        },
        { id: 1, station: "Seoul", title: "달콤한 나의 도시", name: "정이현",
        text: "<div class='iframeArea'><iframe width='100%' height='100px' src='https://www.youtube.com/embed/bMe44sbPrzc' frameborder='0' controls: 0; allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>&nbsp;모든 고백은 이기적이다. 사람들이 누군가에게 고백을 할 때, 그에게 진심을 알리고 싶다는 갈망보다 제 마음의 짐을 덜고 싶다는 욕망이 더 클지도 모른다.\n&nbsp;\n&nbsp;“남자나 여자나 사랑에 빠지는 이유는 비슷할 것 같아. 연애란 게 결국엔 이 거친 세상에서 마음 붙일 데를 찾는 거 아니겠어? 체온을 나누고 싶고, 기대고 싶고, 소통하고 싶고.”\n&nbsp;\n&nbsp;어떤 순간, 인간이라는 존재는 무섭도록 이기적일 뿐더러 자기가 이기적이라는 사실 조차 알지 못한다.\n&nbsp;\n&nbsp;우리는 왜 타인의 문제에 대해서는 날카롭게 판단하고 냉정하게 충고하면서 자기 인생의 문제 앞에서는 갈피를 못잡고 헤매기만 하는 걸까. 객관적 거리 조정이 불가능한 건 스스로를 너무 사랑하기 때문인가, 아니면 차마 두렵기 때문인가."
        },
        { id: 2, station: "Sinseol-dong", title: "사랑의 단상", name: "롤랑 바르트",
        text: "&nbsp;대개의 경우, 사람들은\n&nbsp;여러분에 대해 생각하지 않습니다.\n&nbsp;\n&nbsp;그들은 오히려\n&nbsp;여러분이 그들을\n&nbsp;어떻게 생각할지 걱정하니까요."
        },
        { id: 3, station: "Sillim", title: "행복을 불러들이는 방법", name: "채근담",
        text: "&nbsp;행복은 구한다고 얻어지는 것이 아니다.\n&nbsp;항상 기쁜 마음을 가지고 살아가는 것,\n&nbsp;이것이 행복을 불러들인다.\n&nbsp;\n&nbsp;불행은 피한다고 해서 피해지는 것이 아니다.\n&nbsp;항상 남의 마음을 아프게 하지 않도록\n&nbsp;노력하는것, 이것이 불행을 멀리하게 한다.\n&nbsp;\n&nbsp;즐거운 마음으로 착한 일을 많이 함으로써\n&nbsp;복을 부르는 근본으로 삼고,\n&nbsp;\n&nbsp;남을 해치려는 마음을 버림으로써\n&nbsp;화를 멀리하는 근본으로 삼아야 한다."
        },
        { id: 4, station: "Sinchon", title: "사랑의 단상", name: "롤랑 바르트",
        text: "&nbsp;대개의 경우, 사람들은\n&nbsp;여러분에 대해 생각하지 않습니다.\n&nbsp;\n&nbsp;그들은 오히려\n&nbsp;여러분이 그들을\n&nbsp;어떻게 생각할지 걱정하니까요."
        },
        { id: 5, station: "Songchu", title: "우리 집 여인들", name: "홍상화",
        text: "&nbsp;창작의 순간적인 희열을 맛 본 이상, 인생에서 그 어느 것도 가치 있다고 생각되지 않았다. 어느 것에도 마음을 줄 수가 없었다. 저주받은 창작의 인생이고 비록 무지개를 잡으려는 무모함일지 모르나 그것에는 한 가닥 희망이 있었다. 그러나 다른 것에는 무의미함과 무용함과 허무함 외에 아무것도 없었다.\n&nbsp;\n&nbsp;누구의 강요에 의해서도 아니고 나 자신이 택한 문학의 길인데 탐욕이 없었다면 스스로 만족하지 못할 이유가 없었다. 문학의 길은 험하디 험한 가시밭길이라는 사실을 모르고 문학을 시작한 것이 아니었다. 또한 문학의 길은 극심한 고통과 고독, 분노, 절망, 회의로 이루어진 것도 알고 있었다. 그 길을 상처투성이가 되어 넘는 자에게만 그 대가로 박수가 쏟아지는 것이다."
        },
        { id: 6, station: "City Hall", title: "언젠가 기억에서 사라진다 해도", name: "에쿠니 가오리",
        text: "<div class='iframeArea'><iframe width='100%' height='100px' src='https://www.youtube.com/embed/5HZ9qeFjhYk' frameborder='0' controls: 0; allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>&nbsp;무언가를 이해하기에 아직 어리다면 언젠가는 이해할 때가 온다. 하지만 무언가를 이해하기에는 너무 늙었다면, 그 사람은 영원히 그것을 이해할 수 없다." 
        },
        { id: 7, station: "Yeouinaru", title: "호밀밭의 파수꾼", name: "제롬 데이비드 샐린저",
        text: "&nbsp;정말로 내가 감동하는 책은 다 읽고 나면 그 작가가 친한 친구여서 전화를 걸고 싶을 때 언제나 걸 수 있으면 오죽이나 좋을까 하는, 그런 기분을 느끼게 하는 책이다."
        },
        { id: 8, station: "Sintan-ri", title: "마술극장", name: "오윤주",
        text: "&nbsp;때로 세상의 무수한 속된 말들 중에 어떤 한 마디가 내게만 보내는 신의 전언처럼 느껴질 때가 있다. 대체로 그것은 착각일 것이다. 내 마음이 순간 가 닿아 아무렇지도 않은 것을 아무렇게 만드는 거짓들. 우연들은 그렇게 착각 속에서 운명이 되어 누군가의 인생을 뒤흔든다."
        },
        { id: 9, station: "Hyehwa", title: "와인의 눈물", name: "배명희",
        text:"접속사나 쓸데없이 붙은 부사를 삭제하면 글의 속도는 붙겠지만 글의 울림이나 생각이 머물 수 있는 틈새 같은 것은 사라져 버리는 경우가 있었다."
        },
        { id: 10, station: "Konkuk Univ.", title: "그림 같은 세상", name: "황경신",
        text: "<div class='iframeArea'><iframe width='100%' height='100px' src='https://www.youtube.com/embed/_ARD264SB0g' frameborder='0' controls: 0; allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>&nbsp;봄의 속성은 또한 '가벼움'이다. 꽃가루처럼 가볍고 고양이의 걸음처럼 가볍고, 짝사랑하는 사람이 내게 보여주는 사소한 관심만큼 가볍다. 섣불리 건드렸다가는 흔적도 없이 달아난다. 하지만 어쩌랴. 사방에 꽃가루가 날리고 그것은 끊임없이 재채기를 터뜨리게 하며 비정상적인 과민반응에 빠진 육체는 작은 기쁨과 슬픔에 의해 깊은 절망과 희망 사이를 방황한다. 눈에 보이는 모든 것들과 사랑에 빠져 간절한 심정으로 두 손을 내미는데, 손에 잡히는 것은 아무 것도 없다."
        },
        { id: 11, station: "D.M.C", title: "아가미", name: "구병모",
        text: "<div class='iframeArea'><iframe width='100%' height='100px' src='https://www.youtube.com/embed/uj-fZfscY9Y' frameborder='0' controls: 0; allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>&nbsp;당신이 이걸 알았으면 좋겠어요. 강하가 당신을 특별히 좋아하고 아꼈다고는 말하지 않겠어요. 하지만 '싫어'라는 건 반드시 증오만을 가리키는 게 아니에요. 달리 표현할 말이 마땅치 않아 싫다는 것뿐이지 그건 차라리 혼돈에 가까운 막연함이에요. 그 막막함이야말로 사람이 다른 사람을 받아들이는 방식 가운데 가장 범위가 넓은 거라고 봐요.\n&nbsp;\n&nbsp;그녀는 늘 조우하기 직전 사라져버리는 거대한 물고기를 환상 속에서 본 적 없다면 결코 이해하지 못했을 일이라고 생각하며 미소 지었다. 그리고 놀란 나머지 헹군 머리에서 떨어지는 물을 닦을 생각도 못하고 이쪽을 바라보며 서 있는 곤에게 이어서 말했다.\n&nbsp;\n&nbsp;예쁘다.\n&nbsp;그러자 곤은 한 마리의 생선이 되어 어느 짐승의 입에 들어가지 않도록, 어딜 가든 감추는 데 급급해온 자신의 몸이 누구도 들려 준 적 없던 그 말 한마디로 구원받은 것만 같았다.\n&nbsp;\n&nbsp;언제 어떤 일로 떠날지 모르는 아이였잖아요. 오랜 기간 이내촌에 머물긴 했지만 실제로 당신은 불의의 사고로 떠나왔고요. 강하는 그 이름을 일상적으로 부르는 것조차 두려웠던 거예요. 한 번 제대로 마주한 적 없는 존재의 이름을 부르는 순간, 그 한 글자가 혈관을 부풀어 오르게 하고 마침내 심장이 터져버릴 것 같아서.\n&nbsp;\n&nbsp;곤, 당신 이름 있잖아요. 그거 할아버지 아니고 강하가 지어준 거래요. 그렇게 부르기도 기억하기도 쉬운 단 한 글자뿐인 이름을, 막상 자기가 붙여놓고 부르지도 못했대요. 그 무렵 강하는 [장자]를 어린이용 다이제스트 판으로 엮은 학급문고 도서를 읽고 있었대요. 장자의 첫 장에는 이런 얘기가 있거든요. 북쪽 바다에 사는 커다란 물고기, 그 크기는 몇천 리나 되는 지 알 수 없는데 그 이름을 곤이라고 한다...... 라고요. 강하는 당신의 아가미를 제일 먼저 발견한 사람으로서 이거야말로 이 아이한테 가장 어울리는 이름이라는 생각이 들었대요. 하지만 그래 놓고는 당신의 이름을 부른 적이 거의 없었죠."
        },
        { id: 12, station: "Sindorim", title: "영란", name: "공선옥",
        text: "&nbsp;나는 사실은, 어차피 혼자 살기에는 너무 넓은 집이에요, 라고 말하려 했으나, 그처럼 일목요연한 말들을 발화하는 걸 내 목구멍에 걸려 있는 체기가 허락하지 않았다. 그래서 나는 아무렇게나, 배 속에서부터 시작해서 목구멍을 지나야 하는 의미 있는 말 대신, 혀 끝만 움직여도 되는 말들을 바람처럼 허공에 날렸다. ("  
        },
        { id: 13, station: "Pungsan", title: "이별하는 골짜기", name: "임철우",
        text: "&nbsp;온통 흑색 뿐인 대지와 집과 인간의 모습이 어딘지 꺼림칙하고 두려워진다. 그 검은 세계와 인간 군상이 드러내는 가난, 비루함, 분노, 절망, 무기력의 흔적 앞에서 청년은 부당하게도 압도 당하는 느낌이다.\n&nbsp;\n&nbsp;그것은 그가 지금껏 모르고 살아온 세상, 때문에 왠지 두렵고 기이하고 거북해지는 또 하나의 현실이다."
        },
      ],
      [
        { id: 0, station: "King's Cross", title: "영화처럼 사랑을 요리하다", name: "송정림", 
        text:"&nbsp;다시 잔치는 끝나고 나는 또 홀로 남았다. 하지만 어찌 알겠는가. 눈 앞에 9회말 2아웃의 대역전극이 기다리고 있는지. 스포츠도 끝까지 가봐야 아는 것처럼 우리 인생도 승부는 끝에 가봐야 아는 거다. 후회, 실망, 질투... 이런 거, 우리 마음에 숙박시켜서 좋을 거 하나 없다.\n&nbsp;\n&nbsp;생기발랄한 낙관! 그거 하나만 있으면 두려울 거 하나 없다. 그러니 나난처럼 이렇게 독백해볼 일이다. 그럼 어때? 몇 년 후에는 뭔가 이뤄지겠지. 아님 말고! 파이팅! 파이팅! (영화, '싱글즈' 부분)" 
        },
        { id: 1, station: "Sapporo", title: "옷의 시간들", name: "김희진",
        text:"&nbsp;생물이든 무생물이든, 지구상에 존재하는 모든 것은 결코 떠남의 의무를 저버리지 않는다. 배반은 모든 역사와 기나긴 시간과 수많은 관계들의 진리이자 모태다.\n&nbsp;\n&nbsp;하지만 혼자 웃는 웃음은 길지도 깊지도 않았다. 웃고 나면 왠지 더 쓸쓸해지는 것 같기도 했다. 혼자 웃는 웃음의 후유증이라니. 눈물 뿐이라고 생각했던 웃음의 후유증에 쓸쓸함이 하나 더 추가되는 순간이었다.\n&nbsp;\n&nbsp;관계의 파열음은 한 쪽은 아직인데, 다른 한 쪽은 이미 끝났다고 간주해 버릴 때 생기는 소음이었다. 소음의 끝에는 갈등이 발생하기 마련이다. 갈등은 국가적으로는 전쟁과 분열을, 개인적으로는 다툼과 이별을 낳는다.\n&nbsp;\n&nbsp;결국 앞날에 대한 무지는 시간 낭비를 초래한다. 예언자와 신이 아닌 이상 누구도 시간 낭비의 삶에서 자유로울 순 없다. 그게 인간과 인간의 삶이 지닌 한계인지도 모른다.\n&nbsp;\n&nbsp;그거 아나? 이 세상에 영구적이고 불변하는 건 하나도 없다는 거 말일세. 삼라만상 모두 변해가지. 온 우주를 통틀어 낡고 변하지 않는 건 하나도 없다네. 그러다 결국엔 모두 사라지고 말아. 근데 절대로 변하지 않는 게 딱 하나 있다네. 혹시 그게 뭔지 아나?\n&nbsp;글쎄요. 진리 같은 거요?\n&nbsp;진리라는 것도 가치와 기준이 달라지면 변하게 돼 있지.\n&nbsp;음, 모르겠는데요.\n&nbsp;과거라네.\n&nbsp;과거요?\n&nbsp;그래. 그건 절대 변하지 않아. 그리고 변화시킬 수도 없지. 그러니까 과거에 얽매인 채 살아가는 건 아주 어리석은 짓이야. 과거의 인연이라는 것도 마찬가지지."
        },
        { id: 2, station: "Moscow", title: "외국어를 공부하는 시간", name: "오현종",
        text: "&nbsp;미움은 누구도 대신 받아줄 수 없기에 혼자일 수밖에 없었다. 나는 미움 받는데 익숙한 내가 끔찍할 만큼 싫었다. 나는 우등생이 되고 싶지 않은 것처럼 열등생도 되고 싶지 않았다."
        },
        { id: 3, station: "Dublin Heuston", title: "오래된 빛", name: "전수찬",
        text: "&nbsp;나쁜 기억은 쉽게 일어나 쉽게 삶을 침범했고, 며칠 동안 썩은 내를 풍기다 가라 앉았다."
        },
        { id: 4, station: "Shilin", title: "낙타", name: "이명인",
        text: "<p style='text-align:right;'><i>때때로 사랑은 크리스마스 트리 아래 놓여진 선물 꾸러미처럼 보기만 할 때 행복한 게 있어.\n&nbsp;나도 너도 크리스마스 트리 아래 놓인 선물 꾸러미처럼 있자.\n&nbsp;그 속에 들어 있을 물건이,\n&nbsp;치수가 맞지 않는 옷이나 원하지 않는 것임을 확인하고 실망하지 말자.</i></p>\n&nbsp;\n&nbsp;\n&nbsp;둘이 뭉쳐 하나의 마침표가 된 듯 두 사람의 자세는 단정했다."
        }
      ]
    ], 
    [ //art 0: kor, 1: abd
      [
        { id: 0, station: "Everland", title: "Holding a potted tree", name: "feey", art: "sample_02.jpg"},
        { id: 1, station: "Gimpo Airport", title: "Windows sample image", name: "windows", art: "sample_03.jpg"}
      ],
      [
        { id: 0, station: "Akihabara", title: "Untitled", name: "Lawrence Chismorie", art: "sample_01.jpg"},
        { id: 1, station: "Taipei", title: "Moon", name: "Malik Skydsgaard", art: "sample_04.jpg"}
      ]
    ],
    [ //vdo 0: kor, 1: abd
      [
        { id: 0, station: "Kisaragi", title: "Jazz ASMR", name: "MONKEYBGM", vdo: "https://youtube.com/embed/TbhcfUPYKEU"}
      ],
      [
        { id: 0, station: "Kisaragi", title: "Jazz ASMR", name: "MONKEYBGM", vdo: "https://youtube.com/embed/TbhcfUPYKEU"}
      ]
    ],
    [ //rvw 0: kor, 1: abd
      [
        { id: 0, station: "Yeouinaru", name: "user01",
        text: "&nbsp;좋은 글을 실어 여러분께 소개할 수 있어서 영광이었습니다. 감사합니다."
        },
        { id: 1, station: "D.M.C", name: "user02",
        text: "&nbsp;review text area"},
        { id: 2, station: "Busan", name: "user03",
        text: "&nbsp;review text area"},
        { id: 3, station: "Songchu", name: "user04",
        text: "&nbsp;review text area"},
      ],
      [
        { id: 0, station: "Shilin", name: "user05",
        text: "&nbsp;review text area"},
        { id: 1, station: "Kisaragi", name: "user06",
        text: "&nbsp;review text area"},
        { id: 2, station: "King's Cross", name: "user07",
        text: "&nbsp;review text area"},
        { id: 3, station: "Moscow", name: "user08", 
        text: "&nbsp;review text area"},
        { id: 4, station: "Moscow", name: "user09", 
        text: "&nbsp;review text area"},
      ]
    ]
  ]
  
  return (
    <>
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