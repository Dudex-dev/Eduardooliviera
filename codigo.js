
        document.addEventListener('DOMContentLoaded', () => {
            // Atualizar ano no rodapé
            document.getElementById('year').textContent = new Date().getFullYear();

            // Menu Mobile Toggle
            const menuBtn = document.getElementById('menu-btn');
            const navLinks = document.getElementById('nav-links');

            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Fechar menu mobile ao clicar em um link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            // Filtro de Projetos (JS Puro)
            const filterBtns = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remover classe active dos botões
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Adicionar ao botão clicado
                    btn.classList.add('active');

                    const filterValue = btn.getAttribute('data-filter');

                    projectCards.forEach(card => {
                        const category = card.getAttribute('data-category');

                        if (filterValue === 'all' || category === filterValue) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });