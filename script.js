function getRandomItem(arr) {
    const array = [1, 'hello', 5, 8];

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    document.getElementById("phrase").innerHTML = item;
    return item;
}
