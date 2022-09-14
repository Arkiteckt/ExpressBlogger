
//**********ExpressBlogger Day 2 Assignment DUE ON DAY 3 @ 11:30**********
// const validateBlogData = (blogData) => {
//     const Title
//     const text
//     const author
//      && === "strings" && >40Character.length} else {
//         return {
// 			isValid: false,
// 			message: "Title, text and author are required and must be strings"
// 		}
// 	} 
//     module.exports = {
//         validateBlogData,
//     });

//     //*****STRETCH GOAL ATTEMPT******//
// if catergory === defined <0{
//     return{
//         isValid: true,
//         message: "All entries must be strings"
// }


//********CODE REVIEW WITH INSTRUCTOR */
const validateBlogData = (blogData) => {

	if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
		// title is required and it must be a string
		return {
			isValid: false,
			message: "title is required and it must be a string and must be less than 40 characters"
		}
	} 
	
	if (blogData.text === undefined || typeof(blogData.text) !== "string") {
		// text is required and it must be a string
		return {
			isValid: false,
			message: "Text is required and it must be a string "
		}
	}
	
	if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length > 40) {
		// author is required and it must be a string
		return {
			isValid: false,
			message: "Author is required and it must be a string and must be less than 40 characters"
		}
	} 
	
	return {
		isValid: true
	}
}

module.exports = {
	validateBlogData,
}


// - _Stretch Goal_: 
// - If category is defined and has a length greater than 0:
// - All the entries must be strings
// - There can be no more than 10 entries for category 
// - All categories msut be in the following list of strings:
//     - "Lorem"
//     - "ipsum"
//     - "dolor" 
//     - "sit"
//     - "amet"

const title = req.body.title
const text = req.body.text
const author = req.body.author
const category = req.body.category

const blogData = {
    title,
    text,
    author,
    category,
    createdAt: new Date(),
    lastModified: new Date()


//  -Implement Day 2 stretch goal with .forEach() or .filter() or both
// 	- _Suggestion_: Create individual checks for each condition that you need to account for
// _Stretch Goal_:
// 	- Implement a PUT route using req.params to edit a single blog post in the sampleBlogs
// 	- Using query params in the GET /all and GET /single routes, implement the ability to only return certain fields on the blogPost
// 	- _Hint_: Array.map() can be used to edit all entries in an array in a single call



const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

