export const postProperty = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve(JSON.parse(data));
        }, 3000)
    })
}