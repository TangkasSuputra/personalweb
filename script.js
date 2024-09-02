function showMain() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('portfolioPage').style.display = 'none';
    closeSidebar(); // Ensure sidebar is closed when switching to main page
}

function showPortfolio() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('portfolioPage').style.display = 'block';
    closeSidebar(); // Ensure sidebar is closed when switching to portfolio page
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.style.right === '0px') {
        closeSidebar();
    } else {
        sidebar.style.right = '0px';
        overlay.style.display = 'block';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.style.right = '-250px';
    overlay.style.display = 'none';
}

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.style.right === '0px') {
        closeSidebar();
    }
});
