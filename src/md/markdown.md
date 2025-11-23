# 마크다운 문법

## 1. 배경

- **2004년** 존 그루버(John Gruber)가 만들었으며,  
  아론 스워츠(Aaron Swartz)가 초기 설계에 함께 참여함.
- HTML처럼 복잡한 태그 없이도 **간단한 텍스트 문법만으로 문서 구조를 표현**할 수 있도록 하기 위함.

---

## 2. 발전 & 확장

- 2004년 당시 주로 **블로그 글 작성 용도**로 사용됨.
- 단순성과 높은 가독성 덕분에 개발자 플랫폼에서 빠르게 확산.
- **GitHub(2008)** : README, Issue, PR 등에 사용되며 사실상 표준처럼 자리 잡음.
- 그 외 주요 사용처:
  - Stack Overflow
  - Jekyll
  - Notion
  - Obsidian
  - Slack
  - Discord

---

## 3. 표준화 시도 : CommonMark (2014)

- 초기 마크다운은 **명확한 표준이 없어** 서비스마다 문법(Flavor)이 조금씩 달라짐.
- 이를 통일하기 위해 2014년, 개발자들이 **CommonMark**라는 표준을 발표.
- CommonMark 공식 사이트:  
  https://commonmark.org/

---

## 4. 기본 문법 (Markdown Syntax)

### 참고 문서

- CommonMark 공식 문서: https://commonmark.org/
- GitHub Flavored Markdown 문서: https://github.github.com/gfm/

### 4.1 제목 (Headings)

마크다운에서는 `#` 기호를 사용해 제목 레벨을 표현합니다.  
`#`의 개수에 따라 h1 ~ h6까지 제목 크기가 달라집니다.

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

### 4.2 글자 스타일 (Emphasis)

텍스트를 강조하기 위해 기울임, 굵게, 굵게+기울임을 사용할 수 있습니다.

```markdown
_기울임_
**굵게**
**_굵게 + 기울임_**
```

- 기울임: `*text*`
- 굵게: `**text**`
- 굵게+기울임: `***text***`

### 4.3 링크 (Link)

`[텍스트](URL)` 형식으로 링크를 삽입합니다.

```markdown
[Google](https://www.google.com)
```

### 4.4 이미지 (Image)

링크 문법 앞에 `!`를 붙이면 이미지가 됩니다.

```markdown
![대체 텍스트](이미지_URL)
```

### 4.5 인용문 (Blockquote)

`>` 기호를 사용하여 인용문을 작성합니다.

```markdown
> 이것은 인용문입니다.
> 여러 줄도 가능합니다.
```

중첩 인용문 예시:

```markdown
> 첫 번째 인용
>
> > 두 번째 인용
```

### 4.6 목록 (List)

#### 4.6.1 순서 없는 목록 (Unordered List)

```markdown
- 항목 1
- 항목 2
- 항목 3
```

#### 4.6.2 순서 있는 목록 (Ordered List)

```markdown
1. 첫 번째
2. 두 번째
3. 세 번째
```

#### 4.6.3 중첩 목록 (Nested List)

```markdown
- 과일
  - 사과
  - 바나나
- 채소
  - 당근
  - 양파
```

### 4.7 코드 (Code)

#### 4.7.1 인라인 코드

백틱( \` ) 1개를 사용하여 특정 라인에서 코드 블록을 만들 수 있습니다.

```markdown
`console.log("Hello");`
```

### 4.7.2 코드 블록 (Fenced Code Block)

백틱( \` ) 3개를 사용하여 여러 줄 코드 블록을 만들 수 있습니다.

```
function hello() {
  console.log("Hello, world!");
}
```

언어 이름을 지정하면 문법 하이라이팅이 적용됩니다.

```javascript
function hello() {
  console.log('Hello, world!');
}
```

---

### 4.8 수평선 (Horizontal Rule)

아래의 세 가지 문법은 모두 동일하게 수평선을 만들어냅니다.

```
---
```

```
***
```

```
___
```

---

## 5. 확장 문법 (GitHub Flavored Markdown, GFM)

### 5.1 표 (Table)

표는 다음과 같은 형태로 작성합니다.

```
| 이름 | 나이 | 직업 |
|------|-----|------|
| Anna |  25 | 디자이너 |
| Tom  |  20 | 개발자  |
```

정렬 옵션도 포함할 수 있습니다.

```
| 왼쪽 | 가운데 | 오른쪽 |
|:-----|:------:|-------:|
| A    |   B    |      C |
```

---

### 5.2 체크박스 (Task List)

체크박스 형태의 목록을 만들 수 있습니다.

```
- [ ] 해야 할 일
- [x] 완료된 일
```

---

### 5.3 취소선 (Strikethrough)

취소선은 물결표 2개를 사용합니다.

```markdown
~~취소된 텍스트~~
```

---

### 5.4 각주 (Footnote)

일부 마크다운 엔진 및 GitHub에서 지원하는 각주 문법입니다.

```
각주 예시입니다.[^1]

[^1]: 각주 내용입니다.
```

---
