const button = document.getElementById('btn');
const addForm = document.getElementById('addForm');
// 새로고침 방지
addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('submit 막힘');
});

// 버튼 클릭시 이벤트
button.addEventListener('click', ()=> {
  const input = document.getElementById('text');
  var text = document.getElementById('text').value;
  const message = document.getElementById('message');
  const li = document.createElement('li');
  const list_check = document.createElement('input');
  const list_label = document.createElement('label');
  let list_id = 1;
  
  if(text == ''){
    message.innerHTML = 'Please enter the list.';
    return;
  }
  // else if(li == list_label.innerHTML){
  //   message.innerHTML = '동일한 리스트가 존재합니다.';
  //   return;
  // }
  else {
    // 버튼 클릭시 리스트 추가
    document.getElementById('all-list').appendChild(li);
    
    list_check.type = 'checkbox';
    li.appendChild(list_check);

    const ID = 'list' + 1;
    list_check.id = ID;
    
    list_label.htmlFor = ID;
    list_label.innerHTML = text;
    li.appendChild(list_label);

    input.value = '';

    message.innerHTML = '';
  }
})

//   AI -----------------------------------------------
// 선택된 리스트
let selectedItem = null;

// 삭제 버튼
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.style.display = 'none';
deleteBtn.type = 'button';

// 중요 버튼
const mainbtn = document.getElementById('main');
mainbtn.style.display = 'none';
mainbtn.type = 'button';

// 라벨 클릭 시 리스트 선택 (토글)
document.getElementById('all-list').addEventListener('click', function (e) {
  if (e.target.tagName !== 'LABEL') return;

  e.preventDefault(); // 체크 방지

  const li = e.target.closest('li');
  if (!li) return;

  // ⭐ 같은 항목 다시 클릭 → OFF
  if (selectedItem === li) {
    li.classList.remove('active');
    selectedItem = null;

    deleteBtn.style.display = 'none';
    mainbtn.style.display = 'none';
    return;
  }

  // 이전 선택 해제
  if (selectedItem) {
    selectedItem.classList.remove('active');
  }

  // 새 선택
  selectedItem = li;
  li.classList.add('active');

  // 버튼 컨테이너 없으면 생성
  let btnBox = li.querySelector('.btn-box');
  if (!btnBox) {
    btnBox = document.createElement('div');
    btnBox.className = 'btn-box';
    li.appendChild(btnBox);
  }

  btnBox.appendChild(deleteBtn);
  btnBox.appendChild(mainbtn);

  deleteBtn.style.display = 'inline-block';
  mainbtn.style.display = 'inline-block';
});

// 삭제 버튼
deleteBtn.addEventListener('click', function () {
  if (!selectedItem) return;

  selectedItem.remove();
  selectedItem = null;

  deleteBtn.style.display = 'none';
  mainbtn.style.display = 'none';
});

// ⭐ 중요 버튼 (주황 ↔ 검정 토글)
mainbtn.addEventListener('click', function () {
  if (!selectedItem) return;

  if (selectedItem.classList.contains('important')) {
    selectedItem.classList.remove('important');
  } else {
    selectedItem.classList.add('important');
  }

  deleteBtn.style.display = 'none';
  mainbtn.style.display = 'none';
});
