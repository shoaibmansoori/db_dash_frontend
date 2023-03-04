export const selectActiveUser = (state) =>{
    const user=state.user;
    const fullName=user.userFirstName+" "+user.userLastName;
    const email=user.userEmail;
    const  userProfilePic = user.userProfilePic;
    return {fullName,email, userProfilePic};
}
