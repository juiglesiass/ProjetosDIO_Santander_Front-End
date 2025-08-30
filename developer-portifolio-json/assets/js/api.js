
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juiglesiass/ProjetosDIO_Santander_Front-End/refs/heads/main/developer-portifolio-json/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
