const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve("Resuelto!!!")
        } else {
            reject("whoops!")
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))



const somethingWillHappen2 =  () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
               resolve("True")
            }, 2000)
        } else {
            const error = new Errror("Whoops")
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))



Promise.all([somethingWillHappen2(), somethingWillHappen()])
    .then(response => {
        console.log("array de resultados", response)
    })
    .catch(err => {
        console.error(err)
    })