import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../features/categories/categoriesSlice'
import { getProducts } from '../../features/products/productsSlice'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { AppRoutes } from '../Routes/Routes'
import { Sidebar } from '../Sidebar/Sidebar'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getProducts());

		axios.delete('https://api.escuelajs.co/api/v1/categories/8');

	}, [dispatch])


  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}
