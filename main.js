const requestQuote = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
const requestJoke = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";
const requestUser = "https://api.freeapi.app/api/v1/public/randomusers/user/random";
const requestProduct = "https://api.freeapi.app/api/v1/public/randomproducts/product/random";


function getQuote() {

	fetch(requestQuote)
	.then((response) => {
		return response.json()
	})
	.then((DATA) => {
		console.log(`Here's Your Quote :::>> ${DATA.data.content}`)
	})
	.catch((err) => {
		console.log(`Error Occured: ${err}`)
	})

}

function getJoke() {
	fetch(requestJoke)
	.then((response) => {
		return response.json()
	})
	.then((DATA) => {
		console.log(`Here's Your Joke :::>> ${DATA.data.content}`)
	})
	.catch((err) => {
		console.log(`Error Occured: ${err}`)
	})
}

function getUser() {

	fetch(requestUser)
	.then((response) => {
		return response.json()
	})
	.then((DATA) => {

		let UserData = {
			name: `${DATA.data.name.title} ${DATA.data.name.first} ${DATA.data.name.last}`,
			gender: DATA.data.gender,
			email: DATA.data.email,
			age: DATA.data.dob.age,
			country: DATA.data.location.country,

		}

		// console.table(`User Name: ${UserData.name}` , `Gender: ${UserData.gender}`)
		// console.log(`Here's Your UserData :::>> ${UserData}`)

		// console.log(`Name: ${UserData.name}`)
		// console.log(`Gender: ${UserData.gender}`)
		// console.log(`Email: ${UserData.email}`)
		// console.log(`Age: ${UserData.age}`)
		// console.log(`Country: ${UserData.country}`)

		console.log(UserData)


	})
	.catch((err) => {
		console.log(`Error Occured: ${err}`)
	})

}

function getProduct() {

	fetch(requestProduct)
	.then((response) => {
		return response.json()
	})
	.then((DATA) => {
		let ProductData = {
			product: DATA.data.title,
			brand: DATA.data.brand,
			type: DATA.data.category,
			price: `$${DATA.data.price}`,
			discount: `${DATA.data.discountPercentage}%`,
			rating: `${DATA.data.rating} / 5`


		}

		console.log(ProductData)
	})
	.catch((err) => {
		console.log(err)
	})


}

const GetRequest = (topic) => {
	if (topic === "quote") {
		getQuote();
	}
	else if (topic === "joke") {
		getJoke();
	}
	else if (topic === "user") {
		getUser();
	}
	else if (topic === "product") {
		getProduct();
	}
	else {
		console.log("Sorry that's Not in our Database!")
	}
}


// GetRequest("user")