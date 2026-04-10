#!/bin/bash

# 사용법: ./pr.sh <PR번호> <이슈번호> <제목> <타입> <작업1> <작업2> <clickup URL>
# 예시: ./pr.sh 39 38 "Hero 섹션 카드 추가" feat "새로운 카드 추가" "기존 카드 내용 수정" "https://app.clickup.com/t/abc123"
# 타입: feat | refactor | fix | chore | assets | style

PR_NUM=$1
ISSUE_NUM=$2
TITLE=$3
TYPE=${4:-feat}
TASK1=${5:-"작업 1"}
TASK2=${6:-"작업 2"}
CLICKUP=${7:-"<!-- CLICKUP: https://app.clickup.com/t/태스크ID -->"}

if [ -z "$PR_NUM" ] || [ -z "$ISSUE_NUM" ] || [ -z "$TITLE" ]; then
  echo "사용법: ./pr.sh <PR번호> <이슈번호> <제목> <타입> <작업1> <작업2> <clickup URL>"
  echo "예시: ./pr.sh 39 38 \"Hero 섹션 카드 추가\" feat \"새로운 카드 추가\" \"기존 카드 내용 수정\" \"https://app.clickup.com/t/abc123\""
  echo "타입: feat | refactor | fix | chore | assets | style"
  exit 1
fi

# 라벨 매핑
case $TYPE in
  feat)     LABEL="✨feature" ;;
  refactor) LABEL="♻️refactor" ;;
  fix)      LABEL="🐛fix" ;;
  chore)    LABEL="⚙️chore" ;;
  assets)   LABEL="🖼️assets" ;;
  style)    LABEL="🎨style" ;;
  *)        LABEL="✨feature" ;;
esac

gh pr create \
  --title "[${LABEL}/${PR_NUM}] ${TITLE}" \
  --assignee "@me" \
  --label "${LABEL}" \
  --body "$(cat .github/pull_request_template.md \
    | sed "s|<!-- 어떤 작업인지 간단히 설명 -->|${TITLE}|" \
    | sed "s|- \[ \] 작업 1|- [x] ${TASK1}|" \
    | sed "s|- \[ \] 작업 2|- [x] ${TASK2}|" \
    | sed "s|- \[ \] ${TYPE}|- [x] ${TYPE}|" \
    | sed "s|<!-- closes #이슈번호 -->|closes #${ISSUE_NUM}|" \
    | sed "s|<!-- CLICKUP: https://app.clickup.com/t/태스크ID -->|${CLICKUP}|" \
    | sed 's|- \[ \] 코드 동작 확인|- [x] 코드 동작 확인|' \
    | sed 's|- \[ \] 콘솔 에러 없음|- [x] 콘솔 에러 없음|' \
    | sed 's|- \[ \] ClickUp URL 입력 완료|- [x] ClickUp URL 입력 완료|')"