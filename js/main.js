const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Terminés', 'En cours', 'Bloqué', 'Publié', 'PLanifié',],
    datasets: [{
      label: 'First charts',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
});

//Search
const projects = document.querySelectorAll('.project')

const displayProject = (values) => {
  projects.forEach(element => {
    element.style.display = 'none'
    const title = element.querySelector('h2').innerHTML.toUpperCase();
    const status = element.dataset.status.toUpperCase();
    const recent = element.querySelector('p').innerHTML.toUpperCase();

    if(title.includes(values)){
      element.style.display = "block";
    }else if (values !== 'RECENT' && status.includes(values)) {
      element.style.display = "block";
    }else if (values === 'RECENT' && recent.includes('RECEMMENT') || recent.includes('HEURES')) {
    element.style.display = "block";
  }
  })
}

searchProject.addEventListener('input',(e) =>{
  displayProject(e.target.value.toUpperCase());
})

projectFilter.addEventListener('input',(e) =>{
  displayProject(e.target.value.toUpperCase());
})
