
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

