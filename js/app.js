const textEL = document.querySelector('#text');
// const speedEL = document.querySelector('#speed');

const text = 'Im a professional front-end web developer';

let idx = 1; //문자열 인덱스 번호 1 초기값
let speed = 200; //문자열 출력속도

writeText(); //초기 실행하면 계속 실행됨

function writeText() {
  textEL.textContent = text.slice(0, idx); //첫번째 문자부터 idx-1까지 문자열 잘라내기
  idx++; //idx를 1씩 증가시킨다

  if (idx > text.length) {
    //idx가 텍스트 문자열 길이보다 크면 idx값을 초기값으로 돌림
    idx = 1;
  }

  setTimeout(writeText, speed); //speed초 후에 writeText 함수 실행함 (계속 반복)
}

textEL.addEventListener('change', function (e) {
  speed = 200;
});
