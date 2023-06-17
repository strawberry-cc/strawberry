fetch('data/albums.json')
    .then(response => response.json())
    .then(data => {
        // Use the fetched data
        const albums = data;

        // Get the container element
        const container = document.querySelector('.topster-container');
        // Get the sidebar element
        const sidebar = document.querySelector('.sidebar');

        // Generate the album boxes dynamically
        albums.forEach((album, index) => {
            const box = document.createElement('div');
            box.className = 'topster-box';
            const img = document.createElement('img');
            img.src = album.src;
            img.alt = album.alt;
            box.appendChild(img);
            container.appendChild(box);

            // Add the album title to the sidebar
            const title = document.createElement('p');
            title.textContent = album.alt;
            sidebar.appendChild(title);

            // Add a line break every 5 albums
            if ((index + 1) % 5 === 0) {
                sidebar.appendChild(document.createElement('br'));
            }
        });
    })
    .catch(error => {
        console.error('Error fetching albums:', error);
    });

$(document).ready(function () {
    $('.social-links ul li a').each(function (index) {
        $(this).css('animation-delay', (index * 20) + 'ms');
    });
});
