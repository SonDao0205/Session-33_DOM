const dish = [
    {
        productName: `Rau sạch`,
        category: `Đồ ăn`
    },
    {
        productName: `Thịt lợn`,
        category: `Đồ ăn`
    },
    {
        productName: `Pepsi không calo`,
        category: `Nước`
    },
    {
        productName: `Cocacola`,
        category: `Nước`
    },
    {
        productName: `Cờ lê`,
        category: `Dụng cụ`
    },
    {
        productName: `Tuy vít`,
        category: `Dụng cụ`
    },
];

const listProductElement = document.querySelector("#listProduct");
const filterCategoryElement = document.querySelector("#filterCategory");
const filterButtonElement = document.querySelector("#buttonFilter");

const renderData = (filteredDish = dish) => {
    const htmls = filteredDish.map((product) => {
        return `
        <li>Tên đồ ăn: ${product.productName} - Danh mục: ${product.category}</li>
        `;
    });
    const convert = htmls.join("");
    listProductElement.innerHTML = convert
};
renderData();

filterButtonElement.addEventListener("click", () => {
    const selectedValue = filterCategoryElement.value;

    let categoryText = "";
    switch (selectedValue) {
        case "1":
            categoryText = "Đồ ăn";
            break;
        case "2":
            categoryText = "Nước";
            break;
        case "3":
            categoryText = "Dụng cụ";
            break;
    }
    const filteredDish = dish.filter((product) => product.category === categoryText);
    renderData(filteredDish);
});
