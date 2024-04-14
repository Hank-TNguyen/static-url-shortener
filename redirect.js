document.addEventListener('DOMContentLoaded', function() {
    const redirects = {
        'hackathon-badge': 'https://www.credly.com/badges/897732d5-ac18-4202-8e30-40fd55642090',
        'uapc19': 'https://webdocs.cs.ualberta.ca/~contest/UAPC/2019/div2/',
        // Add more short links here
    };

    // Get the part of the path after the /static-url-shortener/
    const basePath = '/static-url-shortener/';
    let path = window.location.pathname;
    
    // Check if the base path matches the start of the pathname
    if (path.startsWith(basePath)) {
        path = path.slice(basePath.length);
    } else {
        path = path.slice(1); // Assuming there might be other paths not using the prefix
    }

    if (path && redirects[path]) {
        window.location.replace(redirects[path]);
    } else {
        document.getElementById('message').textContent = 'URL not found or not yet configured.';
    }
});
