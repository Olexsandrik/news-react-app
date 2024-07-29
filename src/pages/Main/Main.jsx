import styles from './styles.module.css'
import { NewsBanner } from '../../components/Header/NewsBanner/NewsBanner'
import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'
import { Skeleton } from '../../components/Header/Skeleton/Skeleton'

import { Pagination } from '../../components/Pagination/Pagination'
import { getCategories } from '../../api/apiNews'
import { Categories } from '../../components/Categories/Categories'
export const Main = () => { 
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState('All');

  const totalPages = 10;
  const pageSize  = 10;
   
  const fetchNews = async(currentPage)=>{
    try{
        const response= await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectedCategories === 'All' ? null : selectedCategories
        });

        setNews(response.news);
    }catch(e){
      console.warn(e);
    } finally{
      setIsLoading(false);
    }
  }

  const fetchCategories = async()=>{
    try{
        const response= await getCategories();
        setCategories(["All",...response.categories]);
     
      
     
    }catch(error){
      console.warn(error);
    } 
  }


  useEffect(()=>{
    fetchCategories();
  },[]);

  useEffect(()=>{
    fetchNews(currentPage);


  },[currentPage,selectedCategories])

  const handleNextPage= () =>{
    if(currentPage< totalPages){
      setCurrentPage(currentPage+1);
    }
  }

  const handlePrevPage = ()=>{
    if(currentPage> 1){
      setCurrentPage(currentPage-1);
    }
  }

  return (
   
    <main className={styles.main}>
      <Categories categories={categories} setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories}/>


    {news.length > 0 && !isLoading  ?  <NewsBanner item={news[0]}/> : <Skeleton type={'banner'} count={1}/>}

    <Pagination 
    totalPages={totalPages}  
    handleNextPage ={handleNextPage} 
    handlePrevPage={handlePrevPage} 
    setCurrentPage={setCurrentPage} 
    currentPage={currentPage} />
    
    {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}
    </main>

   
  )
}
