function displayAlert(e) {
    alert(`New Alert: ${e}`)
    console.log(`[Alert] ${e}`)
}

window.onload = (event) => {
    displayAlert(`Page loaded.`)
};