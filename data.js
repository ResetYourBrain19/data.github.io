
const data1= document.getElementById("bodydiv");


const data = {
    "Update_Date": "2022-07-02 16:15:00",
    "USD": {
    "Alış": "16,7259",
    "Tür": "Döviz",
    "Satış": "16,7832",
    "Değişim": "%0,51"
    },
    "EUR": {
    "Alış": "17,4609",
    "Tür": "Döviz",
    "Satış": "17,4971",
    "Değişim": "%-0,17"
    },
    "RUB": {
    "Alış": "0,3048",
    "Tür": "Döviz",
    "Satış": "0,3017",
    "Değişim": "%-7,04"
    },
    "gumus": {
    "Alış": "10,70",
    "Tür": "Altın",
    "Satış": "10,72",
    "Değişim": "%-1,50"
    }
    }

    data1.innerHTML = JSON.stringify(data);