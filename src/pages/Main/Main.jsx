import styles from './styles.module.css'
import { NewsBanner } from '../../components/Header/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'


export const Main = () => { 
  const [news, setNews] = useState([]);
  useEffect(()=>{
    const fetchNews = async()=>{
      try{
        const response= await getNews();
        console.log(response.news);
        setNews(response.news)
      }catch(e){
        console.warn(e);
      }
      
    }
    fetchNews();
  },[])



  return (
    <main className={styles.main}>
    {news.length > 0 ?  <NewsBanner item={news[0]}/> : null}

    <NewsList news={news}/>
    </main>
  )
}
