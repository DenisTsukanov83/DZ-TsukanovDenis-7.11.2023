const inputs = document.querySelectorAll('.inp');

inputs.forEach((el, i)=> {
    el.addEventListener('keydown', () => {
        el.style.width = ((el.value.length + 1) * 8) + 'px';
        el.style.minWidth = '30px';
    })
    el.addEventListener('focus', () => {
        el.value = '';
        el.style.width = '30px';
    })
});

// Task-1

class Car {
    constructor(brand, color, volume, consumption) {
        this.brand = brand;
        this.color = color;
        this.volume = volume;
        this.consumption = consumption
    }

    getDistance() {
        return this.volume / this.consumption * 100;
    }
}

const car1 = new Car('toyota', 'black', 100, 5);

class Truck extends Car {
    constructor(brand, color, volume, consumption, liftingCapacity) {
        super(brand, color, volume, consumption);
        this.liftingCapacity = liftingCapacity;
    }

    getCostPrice(gasPrice) {
        console.log(gasPrice)
        return (this.consumption / 100) * gasPrice / this.liftingCapacity;
    }
}

const but1 = document.querySelector('.btn'),
    inps1 = document.querySelectorAll('.task-1 .inp'),
    res1 = document.querySelector('.task-1 .res'),
    fuel = document.querySelector('.task-1 .inp.fuel');

    

but1.addEventListener('click', () => {
    let arr =[];

    inps1.forEach(el => {
        arr.push(el.value)
    });

    const car = new Truck(...arr);
    res1.innerHTML = `
        <div>Марка автомобиля: ${car.brand}</div>
        <div>Цвет автомобиля: ${car.color}</div>
        <div>Объем бака: ${car.volume}</div>
        <div>Расход топлика на 100км: ${car.consumption}</div>
        <div>Грузоподъемность автомобиля: ${car.liftingCapacity}</div>
        <div>Растояние с полным баком: ${Math.round(car.getDistance())}</div>
        <div>Цена топлива: ${fuel.value}</div>
        <div>Себестоимость перевозки 1т груза на 1 км: ${car.getCostPrice(fuel.value).toFixed(2)}</div>
    `;
});

// Task-2

const res2 = document.querySelector('.task-2 .res'),
    but2 = document.querySelector('.task-2 .btn'),
    inps2 = document.querySelectorAll('.task-2 .inp');

class Parallelepiped {
    constructor(width, height, z) {
        this.width = width;
        this.height = height;
        this.z = z;
    }

    showObj() {
        res2.innerHTML = `
            <div>Ширина: ${this.width}</div>
            <div>Высота: ${this.height}</div>
            <div>Глубина: ${this.z}</div>
        `;
    }
}

class Parallelepiped2 extends Parallelepiped {
    constructor(width, height, z, mass) {
        super(width, height, z);
        this.v = this.width * this.height * this.z;
        this.mass = mass;
    }

    getP() {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div.innerHTML = `<div>Масса: ${this.mass}</div>`;
        div2.innerHTML = `<div>Плотность: ${this.mass / this.v}</div>`;
        res2.appendChild(div);
        res2.appendChild(div2);
    }
}

but2.addEventListener('click', () => {
    let arr2 = [];

    inps2.forEach(el => {
        arr2.push(el.value);
    });

    const obj = new Parallelepiped2(...arr2);

    obj.showObj(...arr2)
    obj.getP();
});



