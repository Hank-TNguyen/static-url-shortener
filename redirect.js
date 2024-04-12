document.addEventListener('DOMContentLoaded', function() {
    const redirects = {
        '1': 'https://www.first-link.com',
        '2': 'https://www.second-link.com',
        // Add more short links here
    };

    const path = window.location.pathname.slice(1); // Remove the leading slash
    if (path && redirects[path]) {
        window.location.replace(redirects[path]);
    } else {
        document.getElementById('message').textContent = 'URL not found or not yet configured.';
    }
});
