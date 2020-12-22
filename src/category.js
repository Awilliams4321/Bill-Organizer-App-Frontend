class Category {

    static allCategories = []

    constructor(category) {
        this.id = category.attributes.id
        this.name = category.attributes.name
        Category.allCategories.push(this)
    }

    static renderAllCategories() {
        for(let category of this.allCategories){
            category.renderCategories()
        }
    }

    static fetchCategories() {
        fetch(categoriesURL)
        .then(response => response.json())
        .then(categories => {
            categories.data.forEach(console.log)
        })
    }

    static renderCategories() {
        const li = document.createElement("li")
        li.dataset.id = this.id

        const p = document.createElement("p")
        p.innerText = this.name

        categoryList.appendChild(p)
    }

}