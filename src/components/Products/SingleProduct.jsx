import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { ROUTES } from '../../utils/routes'
import { Product } from './Product'

export const SingleProduct = () => {

	const {id} = useParams()
	const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id})
	const navigate = useNavigate()

	useEffect(() => {
		if(!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME);
		}
	},[isFetching, isLoading, isSuccess, navigate])

  return (
	!data ? (
		<section className='preloader'>Loading...</section>

	) : (
		<>
			<Product {...data}/>
		</>
	)
  )
}
