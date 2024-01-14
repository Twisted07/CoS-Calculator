// Sections
const cosSection = document.querySelector(".cos-section");
const rateSection = document.querySelector(".rate-section");
const productPriceSection = document.querySelector(".product-price-section");
const profitSection = document.querySelector(".profit-section");

const sectionList = [cosSection, rateSection, productPriceSection, profitSection];


// Nav buttons
const btnCos = document.querySelector(".cos");
const btnHourlyRate = document.querySelector(".hourly-rate");
const btnProductPrice = document.querySelector(".product-price");
const btnProfit = document.querySelector(".profit");

const btnList = [btnCos, btnHourlyRate, btnProductPrice, btnProfit]

// function navObj (list)
let list = [];
for (let i = 0; i < btnList.length; i++) {
    list[i] = {
        section: sectionList[i],
        button: btnList[i]
    }
}

btnList.forEach(btn => {
    btn.onclick = (e) => {
        outputArea = document.querySelector(".output__text");
        outputArea.textContent = "";
        console.log(outputArea.textContent)
        list.forEach(object => {
            object.button === e.target ? object.section.style.display = "block" : object.section.style.display = "none";
        })

    }
})


const rateInput = document.querySelector(".input__rate");
const timeInput = document.querySelector(".input__time");
const materialInput = document.querySelector(".input__materials");
const equipmentInput = document.querySelector(".input__equipments");
const lifeSpanInput = document.querySelector(".input__life-span");


// CoS calculation
const btnCalCoS = document.querySelector(".btn-cal__cos");

btnCalCoS.onclick = () => {
    if (rateInput.value && timeInput.value && materialInput.value && equipmentInput.value && lifeSpanInput.value) {
        rate = Number(rateInput.value);
        time = Number(timeInput.value);
        material = Number(materialInput.value);
        equipment = Number(equipmentInput.value);
        lifeSpan = Number(lifeSpanInput.value);
        
        rateValue = rate * time;
        equipmentValue = Math.ceil(equipment / lifeSpan);
        
        costOfService = rateValue + material + equipmentValue;
        
        const output = document.querySelector(".output__text");
        output.textContent = `Your cost of service is ${costOfService}`;
    }
}

// Hourly rate calculation
const btnCalHourlyRate = document.querySelector(".btn-cal__hourly-rate");

btnCalHourlyRate.onclick = () => {
    console.log("Twisted is loading")
    const laborCost = Number(document.querySelector(".input__labor-cost").value);
    const overHeadCost = Number(document.querySelector(".input__overhead-cost").value);
    const grossProfit = Number(document.querySelector(".input__gross-profit").value);
    const billHours = Number(document.querySelector(".input__billable-hours").value);

    if (laborCost && overHeadCost && grossProfit && billHours) {
        totalCost = laborCost + overHeadCost + grossProfit;
        const hourlyRate = Math.ceil(totalCost / billHours);

        const output = document.querySelector(".output__text");
        output.textContent = `Your hourly rate is ${hourlyRate}`;
    }
}

// Product Price

/*
 * total cost of production = cost of raw materials + direct labor + manufacturing overhead

    * direct labor cost = labor hourly rate / number of hours worked
    it is basically how much labor charges per hour / the number of hours used to produce a unit product.

    * labor hourly rate = basic salary of labor + other payments / number of billable hours the labor is paid for.

    * manufacturing overhead = accommodation/hour + transportation/production + other expenses that aids the smooth running of the production/their impact into the production

 * product price = total cost of production + profit
*/

const btnCalProductPrice = document.querySelector(".btn-cal__product-price");


btnCalProductPrice.onclick = () => {
    const totalMaterial = Number(document.querySelector(".input__total-materials").value);
    const totalProducts = Number(document.querySelector(".input__total-products").value);
    const totalLabor = Number(document.querySelector(".input__total-labor").value);
    // const productionHours = Number(document.querySelector(".input__production-hours").value);
    const totalOverheadCost = Number(document.querySelector(".input__product-overhead").value);
    const productProfit = Number(document.querySelector(".input__product-profit").value);

    // unitLaborCost = Math.ceil(totalLabor / productionHours);
    totalCostPrice = totalMaterial + totalLabor + totalOverheadCost;
    profit = Math.ceil(totalCostPrice * productProfit / 100);
    productPrice = Math.ceil((totalCostPrice + profit) / totalProducts);

    const output = document.querySelector(".output__text");
    output.textContent = `Your Unit Cost of Product is ${productPrice}`;
}
