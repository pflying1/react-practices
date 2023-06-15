import React, { FC } from "react"

/* 
  * 해당 예제ㅐ 파일은 tsx 방식으로 작성되었으며,
  * 위의 import 에서, 별도로 FC 라는 타입(코드와 별개로)을 가져오기 (import)하여 활용함.
  * 보통의 경우 Props(개념)을 사용하여 인터페이스 작성법을 통해, 직접 사용하나, 아래의 예제에서는 편의상 내장 인터페이스를 활용하였다. 
*/

const App: FC = () => {
  <ul>
    <li>첫번째 리스트</li>
    <li>두번째 리스트</li>
    <li>세번째 리스트</li>
  </ul>
}

export default App