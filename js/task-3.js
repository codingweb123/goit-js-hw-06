class StringBuilder {
	#builtString
	constructor(intialString) {
		this.#builtString = intialString
	}
	getValue() {
		return this.#builtString
	}
	padStart(symbol) {
		this.#builtString = symbol + this.#builtString
	}
	padEnd(symbol) {
		this.#builtString = this.#builtString + symbol
	}
	padBoth(symbol) {
		this.#builtString = symbol + this.#builtString + symbol
	}
}
const builder = new StringBuilder(".")
console.log(builder.getValue()) // "."
builder.padStart("^")
console.log(builder.getValue()) // "^."
builder.padEnd("^")
console.log(builder.getValue()) // "^.^"
builder.padBoth("=")
console.log(builder.getValue()) // "=^.^="
