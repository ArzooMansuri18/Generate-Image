function generateImage() {
    let randomNumber = Math.floor(Math.random() * 15) + 1;
    let texts = {
        1: 'Geto Senguru',
        2: 'Gojo Saturo',
        3: 'Inumaki Toge',
        4: 'Mahito',
        5: 'Maki Zenin',
        6: 'Megumi Fushiguro',
        7: 'Miva',
        8: 'Nanami Kento',
        9: 'Nobara Kugisaki',
        10: 'Panda',
        11: 'Ryomen Sukuna',
        12: 'Toji Fushiguro',
        13: 'Todo',
        14: 'Yuta Okkotsu',
        15: 'Yuji Itadori',

    };

    document.getElementById('numberImage').src = `Images/${randomNumber}.image.jpg`;

    document.getElementById('randomtext').textContent = texts[randomNumber];
}




