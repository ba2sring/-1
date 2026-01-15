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
    message.innerHTML = '리스트 이름을 입력해 주세요.';
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
  }
})

//   AI -----------------------------------------------
// 선택된 리스트
let selectedItem = null;

// 삭제 버튼
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.style.display = 'none';
deleteBtn.type = 'button'; // form 안에 있어도 새로고침 방지

// 라벨 클릭 시 리스트 선택 (토글)
document.getElementById('all-list').addEventListener('click', function (e) {
  if (e.target.tagName !== 'LABEL') return;

  e.preventDefault(); // 라벨 클릭 시 체크박스 작동 방지

  const li = e.target.closest('li');
  if (!li) return;

  // ⭐ 이미 선택된 항목을 다시 눌렀을 때 (토글 OFF)
  if (selectedItem === li) {
    li.classList.remove('active');
    selectedItem = null;
    deleteBtn.style.display = 'none';
    deleteBtn.remove();
    return;
  }

  // 다른 항목이 선택돼 있었다면 해제
  if (selectedItem) {
    selectedItem.classList.remove('active');
  }

  // 새 항목 선택
  selectedItem = li;
  li.classList.add('active');

  // 삭제 버튼을 해당 li 아래로 이동
  li.appendChild(deleteBtn);
  deleteBtn.style.display = 'block';
});

// 삭제 버튼 클릭 시 선택된 리스트 삭제
deleteBtn.addEventListener('click', function () {
  if (!selectedItem) return;

  selectedItem.remove();
  selectedItem = null;
  deleteBtn.style.display = 'none';
});
