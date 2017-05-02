/**
 * Created by Administrator on 2017/4/26.
 */
var findUser=function(){
	console.log("findUser");
	return [
		{
			userName:"张三",
			userAge:18
		},
		{
			userName:"李四",
			userAge:20
		}
	]
}
var deleteUser=function(){
	console.log("Delete User");
}
export {
	findUser,deleteUser
}