    let toggleDbtn = document.querySelector('#dark');
    let toggleLbtn = document.querySelector('#light');
    let body = document.querySelector('body');

    toggleDbtn.onclick = function(){    

      if(toggleDbtn.toggle !== 'active'&&toggleDbtn.textContent !== 'Light'){
        toggleDbtn.classList.toggle('active');
      body.classList.toggle('dark');
      toggleDbtn.textContent = 'Light';
    } else {
      toggleDbtn.classList.toggle('active');
      body.classList.toggle('dark');
      toggleDbtn.textContent = 'Dark';
      }
    }

    let group = ['John', 'Mary', 'Joel', 'Friday']
    console.log(group);
    console.log(group[2]);