 const boxes = document.querySelectorAll('.box');
        let draggedBox = null;

        boxes.forEach(box => {
            box.addEventListener('dragstart', (e) => {
                draggedBox = e.target;
            });

            box.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            box.addEventListener('drop', (e) => {
                if (draggedBox !== e.target) {
                    let tempBg = draggedBox.style.backgroundImage;
                    draggedBox.style.backgroundImage = e.target.style.backgroundImage;
                    e.target.style.backgroundImage = tempBg;
                }
            });
        });