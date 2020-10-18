export default class FetchData {

  startUrl = 'https://api.spacexdata.com/v4/'
  getResours= async (url)=>{
    const res = await fetch (url)
    if(!res.ok){
      throw new Error(`Произошла ошибка ${res.status}`)
    }
    return await res.json()
  }

  getRocket = async () => await this.getResours(this.startUrl+'rockets' )
  getLounches = async ()=> await this.getResours(this.startUrl+ 'launches/past')
  getCompany = async ()=> await this.getResours(this.startUrl+ 'company' )
}