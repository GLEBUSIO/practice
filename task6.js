class human
{
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Information()
    {
        return `Меня зовут: ${this.name}, мне ${this.age}, я из ${this.country} `
    }

}
const dima = new human('Дима', '30', 'Беларусь');
const roma = new human('Рома', '23', 'Беларусь');
console.log(dima.Information());
console.log(roma.Information());

