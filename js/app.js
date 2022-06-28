import Masonry from '.js/masonry.pkgd.min';

window.onload = () => {
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        originLeft: false,
        originRight: false,
        // horizontalOrder: true,
    });
}
