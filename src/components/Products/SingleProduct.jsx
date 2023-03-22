import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { getRelatedProducts } from '../../features/products/productsSlice'
import { ROUTES } from '../../utils/routes'
import { Product } from './Product'
import { Products } from './Products'

export const SingleProduct = () => {

	const {id} = useParams()
	const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id})
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {list, related} = useSelector(({products}) => products)

	useEffect(() => {
		if(!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME);
		}
	},[isFetching, isLoading, isSuccess, navigate])

	useEffect(() => {
		if(!data || !list.length) return

			dispatch(getRelatedProducts(data.category.id))
		
	},[data, dispatch, list.length])

  return (
	!data ? (
		<section className='preloader'>Loading...</section>

	) : (
		<>
			<Product {...data}/>
			<Products products={related} amount={10} title='Related products' />
		</>
	)
  )
}
