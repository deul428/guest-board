import React from 'react';
import { createContext, useContext, useState } from 'react';

const Context = createContext(); //createContext 선언

export function ApplicationContextProvider({ children }) {//관리대상들을 감쌀 아이
	const [listParams, setListParams] = useState('fic'); //글로벌하게 관리할 state
	const [cntryParams, setcntryParams] = useState('kor');

	const value = {
		listParams,
		setListParams,
		cntryParams,
		setcntryParams,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
    //children 자리에 감싸질 컴포넌트가 들어올 것
}
export function useApplicationContext() {//형제 컴포넌트에서 context를 사용할 때 쓸 아이
	return useContext(Context);
} 
//출처: https://andwinter.tistory.com/327