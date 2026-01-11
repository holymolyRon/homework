/*
  변수, 상수 작성 과제
  각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.
*/

// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.
let movie_title = '아바타'

// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.
const SPEED_OF_LIGHT = 299_792_458

// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.
let isEmailVerified = true

// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.
let stockQuantity = 47

// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.
let memberPoints = 15_800

// 6. API 서버의 "기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.
const BASE_URL = 'https://api.example.com'

// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.
let viewCount = 1_234

// 8. "배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.
const DELIVERY_STATUS = {
  READY: '준비중',
  SHIPPING: '배송중',
  DONE: '배송완료',
}
let deliveryStatus = DELIVERY_STATUS.READY

// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isCouponUsable = false

// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.
const MAX_UPLOAD_FILE_SIZE = 10_485_760

// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.
let userGradeScore = 85.5

// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isNotificationEnabled = true

// 1~12번 출력 (console.log)
console.group('<< 변수, 상수 작성 과제 >>')
console.log(movie_title);
console.log(SPEED_OF_LIGHT);
console.log(isEmailVerified);
console.log(stockQuantity);
console.log(memberPoints);
console.log(BASE_URL);
console.log(viewCount);
console.log(deliveryStatus);
console.log(isCouponUsable);
console.log(MAX_UPLOAD_FILE_SIZE);
console.log(userGradeScore);
console.log(isNotificationEnabled);
console.groupEnd()
console.log('=========================')


/*
  함수 작성 과제
  1. 환영 메시지 생성
  2. 배송비 계산
  3. 비밀번호 유효성 검사
  4. 포인트 적립 계산
  5. 영화 티켓 가격 계산
*/
console.group('<< 함수 작성 과제 >>')

// 1. 환영 메시지 생성 (함수 선언으로 작성)
const MEMBER_GRADE = {
  VIP : 'VIP',
  GENERAL : 'General',
}

function printWelcomeMessage(memberGrade, memberName) {
  let message = '안녕하세요, 고객님! 즐거운 쇼핑 되세요.'

  if (memberGrade === MEMBER_GRADE.VIP)
    message = '🌟 VIP ' + memberName + '님, 특별한 혜택이 준비되어 있습니다!'
  else if (memberGrade === MEMBER_GRADE.GENERAL)
    message = '안녕하세요, ' + memberName + '님! 즐거운 쇼핑 되세요.'
  // code others grade..
  
  return message
}
// TEST
console.group('1. 환영 메시지 생성')
console.log(printWelcomeMessage(MEMBER_GRADE.GENERAL, '이정론'))
console.log(printWelcomeMessage(MEMBER_GRADE.VIP, '야무'))
console.log(printWelcomeMessage('Basic', '철수'))
console.groupEnd()

console.groupEnd()