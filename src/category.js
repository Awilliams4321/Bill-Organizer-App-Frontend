// class Category {

//     static allCategories = []

//     constructor(category) {
//         this.id = category.id
//         this.name = category.attributes.name
//         this.bills = category.attributes.bills
//         Category.allCategories.push(this)
//     }

//     // static renderAllCategories() {
//     //     for(let category of this.allCategories){
//     //         category.renderCategories()
//     //     }
//     // }

//     static fetchCategories() {
//         fetch(categoriesURL)
//         .then(response => response.json())
//         .then(categories => {
//             categories.data.forEach(category => {
//                 let newCategory = new Category(category)
//                 // console.log(newCategory)
//                 newCategory.renderCategories()
//             })
//         })
//     }

//     renderCategories() {
//         const li = document.createElement("li")
//         li.dataset.id = this.id

//         const p = document.createElement("p")
//         p.innerText = this.name

//         this.bills.forEach(bill => {
//             let billObj = new Bill(bill)
//             // console.log(billObj)
//             billObj.renderBills()
//         })

//         li.appendChild(p)
//         categoryList.appendChild(li)
//     }
// }