export const getUserLogin = () => {
    const userLogin = localStorage.getItem('USER')

    if (!userLogin) return
    return JSON.parse(userLogin)
}
