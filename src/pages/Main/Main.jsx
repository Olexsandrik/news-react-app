import styles from './styles.module.css'
import { NewsBanner } from '../../components/Header/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'
import { Skeleton } from '../../components/Header/Skeleton/Skeleton'


export const Main = () => { 
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchNews = async()=>{
      try{
        setTimeout( async()=>{
          const response= await getNews();
          console.log(response.news);
          setNews(response.news)
        },1000)
      
      }catch(e){
        console.warn(e);
      }
      
    }
    fetchNews();
  },[])



  return (
    <main className={styles.main}>
    {news.length > 0 && !isLoading ?  <NewsBanner item={news[1]}/> : <Skeleton count={1} type={'banner'}/>}

    <NewsList news={news}/>
    </main>
  )
}
