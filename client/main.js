let baseURL = 'http://localhost:4000'

const fortuneBtn = document.getElementById("fortuneButton")
const complimentBtn = document.getElementById("complimentButton")
const getSomeComplimentsBtn = document.querySelector("#getSomeCompliments")
const getSomeComplimentsDiv = document.querySelector("#complimentDisplay")
const addComplimentBtn = document.querySelector("#addCompliment")
const complimentInput = document.querySelector('#newCompliment')
const deleteBtn = document.querySelector('#deleteButton')
const deleteInput = document.querySelector('#complimentId')


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
    
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}




const getSomeCompliments = () => {
    getSomeComplimentsDiv.innerHTML = ''

    axios.get(`${baseURL}/compliments`)
        .then((res)=> {
            console.log(res.data)

                for(let i=0; i < res.data.length; i++){
                    let newSpan = document.createElement('p')
                    newSpan.textContent = `${i +1}. ${res.data[i]}`
                    getSomeComplimentsDiv.appendChild(newSpan)
                }
        })
}

const addCompliment = () => {

    complimentDiv.innerHTML = ''

    let bodyObj = {
        name: complimentInput.value
    }

    axios.post(`${baseURL}/compliments`, bodyObj)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                complimentDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        })
}

const deleteCompliment = () => {
    complimentDiv.innerHTML = ''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/compliments/${idToDelete}`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                complimentDiv.appendChild(newSpan)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}




fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
getSomeComplimentsBtn.addEventListener('click', getSomeCompliments)
addComplimentBtn.addEventListener('click', addCompliment)
deleteBtn.addEventListener('click', deleteCompliment)

getSomeCompliments()