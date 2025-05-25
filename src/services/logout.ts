import Cookies from 'js-cookie'

export function logout() {
    if (confirm('Deseja seguir com o Logout?') === true) {
        Cookies.remove('Authorization')
        window.location.href = '/'
    }
}
