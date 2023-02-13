function getId() {
    // generates unique key
    let id = String(Date.now());
    let rand = String(Math.round(Math.random() * 10 ** 15))
    return id + rand
}
export default getId;