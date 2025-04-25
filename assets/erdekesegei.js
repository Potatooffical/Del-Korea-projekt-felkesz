fetch('/assets/korea_latnivalok.json')
  .then(response => response.json())
  .then(data => {
    const listaDiv = document.getElementById('latnivalo-lista');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalHelyszin = document.getElementById('modal-helyszin');
    const modalReszletes = document.getElementById('modal-reszletes');
    const closeBtn = document.querySelector('.close');

    data.forEach((latnivalo) => {
      const div = document.createElement('div');
      div.classList.add('latnivalo', 'p-3', 'mb-2', 'bg-light', 'border', 'rounded');
      div.innerHTML = `<strong>${latnivalo.nev}</strong> – ${latnivalo.rovid}`;

      // Itt hozzuk létre a gombot
      const button = document.createElement('button');
      button.textContent = 'Részletek';
      button.classList.add('btn', 'btn-primary', 'ms-2');
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // Ne indítsa el a div kattintását
        modalTitle.textContent = latnivalo.nev;
        modalHelyszin.textContent = `📍 Helyszín: ${latnivalo.helyszin}`;
        modalReszletes.textContent = latnivalo.reszletes;
        modal.classList.remove('hidden');
      });

      div.appendChild(button);
      listaDiv.appendChild(div);
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
