import axios from "axios";

export default {

	async postQuestion(qObj){
		axios.post('/addQuestion', qObj)
	},

	fetchQuestion(userid) {
		return axios.post(`/getQuestion`, {
			id: userid
		})
			.then(res => res.data)
	},

	async postAnswer(userid, answer) {
		return axios.post('/addAnswer', { id: userid, answer: answer})
	},

	fetchAnswers(){
		return axios.post('/getAnswers').then(res => res.data.answers)
	},

	async postNewUser(userid) {
		return axios.post('/addUser', {id: userid}).then(res => res.data.status)
	},

	initiateGame(){
		return axios.post('/addQuestionFile').then(res => res.data.status)
	},

	async endGame(){
		axios.post('/deleteFiles')
	},

	fetchQuestions(){
		return axios.post('/getAllQuestions').then( res => res.data.questions)
	}
}