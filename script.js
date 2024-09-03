function showMain() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('portfolioPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    closeSidebar(); // Close the navigation bar if it's open
}

function showPortfolio() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('portfolioPage').style.display = 'block';
    document.getElementById('aboutPage').style.display = 'none';
    closeSidebar(); // Close the navigation bar if it's open
}

function showAbout() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('portfolioPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
    closeSidebar(); // Close the navigation bar if it's open
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
