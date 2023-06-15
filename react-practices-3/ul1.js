let ulElement = '<ul>'

// li 요소(element)들 생성
let liFirst = '<li>첫번째 리스트</li>'
let liSecond = '<li>두번째 리스트</li>'
let liThird = '<li>세번째 리스트</li>'

//li 요소(element)들을 ul 요소 (element)에 추가
ulElement += liFirst;
ulElement += liSecond;
ulElement += liThird;

ulElement += '</ul>'

//ul 요소 (element)를 body 에 추가 (또는 다른 대상 요소에 추가)
document.body.innerHTML = ulElement;