import React, { FC } from 'react'
import { IProduct } from '../types'

interface ProductDetailsProps {
  product: IProduct
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  if (!product) {
    return <h1>Empty product</h1>
  }

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.title}
          </h2>
          <p className="mt-4 text-gray-500">{product.description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Материал</dt>
              <dd className="mt-2 text-sm text-gray-500">{product.material}</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Размер</dt>
              <dd className="mt-2 text-sm text-gray-500">{product.size}мм</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Цвет</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {product.colors.join(', ')}
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
          <img
            src={product.images[0]}
            alt={product.title}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
