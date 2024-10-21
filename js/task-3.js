class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str; // Додаємо str в кінець value
    }

    padStart(str) {
        this.#value = str + this.#value; // Додаємо str на початок value
    }
    
    padBoth(str) {
        this.padStart(str); // Викликаємо padStart для додавання str на початок
        this.padEnd(str);   // Викликаємо padEnd для додавання str в кінець
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
