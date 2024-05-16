function first (name, callback) {
    console.log(`Hi ${name}`)
    callback()
}

function second () {
    console.log(`I am callback function`)
}

first("shailendra", second)