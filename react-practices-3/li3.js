// ul DOM 생성
let ulElement = document.createElement('ul')
// li DOM 생성
let liFirst = document.createElement('li')
let liSecond = document.createElement('li')
let liThird = document.createElement('li')
// li DOM에 textNode 추가
liFirst.appendChild(document.createTextNode('첫번째 리스트'))
liSecond.appendChild(document.createTextNode('두번째 리스트'))
liThird.appendChild(document.createTextNode('세번째 리스트'))

//ul DOM에 li DOM 추가
ulElement.appendChild(liFirst)
ulElement.appendChild(liSecond)
ulElement.appendChild(liThird)

//body DOM에 ul DOM 추가
document.body.appendChild(ulElement)

