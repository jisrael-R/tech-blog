async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      notification2();
    } else {
      notification3();
    }
  }
  function notification3 (){
    const divEl = document.querySelector('.notice');
    const textEl = document.createElement('p');
    textEl.textContent = "You're Logged Out!";
    divEl.append(textEl);
   setTimeout(()=>{
    document.location.reload();

  },6000);
}
  function notification2 (){
    const divEl = document.querySelector('.notice');
    const textEl2 = document.createElement('p');
    textEl2.textContent = "You are Logging Out!";
    divEl.append(textEl2);
   setTimeout(()=>{
    document.location.replace('/');

  },4000);
}
 document.getElementById('logout').addEventListener('click', logout);