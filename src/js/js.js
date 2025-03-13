try {
    document.querySelector('.App3 ul li').addEventListener('click',()=>{
        document.querySelector('.App3 ul').csstext = `
            animation-play-state: paused;
        `;
    })
}
catch (error) {
    alert(error);
}