
async function fetchProfileData() {
    const url = 'https://github.com/juiglesiass/ProjetosDIO_Santander_Front-End/blob/main/developer-portifolio-json/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
