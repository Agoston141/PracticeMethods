const students = [
    { name: 'János', age: 18, grades: [5, 4, 4, 5] },
    { name: 'Anna', age: 19, grades: [3, 4, 2, 5] },
    { name: 'Lajos', age: 15, grades: [5, 5, 4, 5] },
    { name: 'Vera', age: 17, grades: [3, 4, 2, 4] }
];

// Diákok listázása:
const resultList = document.querySelector("#result-list")
const ListButton = document.querySelector("#student-list input")

const createStudentsList = (data) =>{
    const student = data.map(({name,age,grades}) =>
        `<li>
            Név:${name} -  Év: ${age} Év - Jegyek:${grades}
        </li>
        `
        )
    return student.join('')
}

ListButton.addEventListener("click",(event)=>{
    event.preventDefault()
    resultList.innerHTML=createStudentsList(students)
})


// Diák hozzáadása a listához:
const addStudent = () =>{
    const name = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const  grades = document.querySelector("#grades").value.split(", ")

    students.push({name,age,grades})
}
const  addStudentButton = document.querySelector("#add-student-form button")
addStudentButton.addEventListener("click",(event)=>{
    event.preventDefault()
    addStudent()
})


// Életkor szerinti szűrés:
// Adott átlagtól jobb diákok szűrése:
// Diák törlése:
// Jegyek módosítása: