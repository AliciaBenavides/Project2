let data = [
    {
      name: 'Design',
      age: '3 Credits'
    },
    {
      name: 'Photography',
      age: '3 Credits'
    },
    {
      name: 'Digital Media Programming',
      age: '3 Credits'
    },
    {
      name: 'Intro to Digital Media',
      age: '3 Credits'
    },
    {
      name: 'Interface Design',
      age: '3 Credits'
    },
    {
      name: 'Digital Video',
      age: '3 Credits'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' at NVC' + '</div>';
  });
  
  info.innerHTML = details.join('\n');